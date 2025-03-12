import { jsPDF } from 'jspdf';
import emailjs from '@emailjs/browser';
import { CartItem } from '../types';

export async function generateReceipt(cart: CartItem[], total: number) {
  // Generate PDF receipt
  const doc = new jsPDF();
  
  doc.setFontSize(20);
  doc.text('M&R Glam - Receipt', 20, 20);
  
  doc.setFontSize(12);
  let y = 40;
  
  cart.forEach(item => {
    doc.text(`${item.name} x${item.quantity}`, 20, y);
    doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 150, y);
    y += 10;
  });
  
  doc.line(20, y, 190, y);
  y += 10;
  doc.setFontSize(14);
  doc.text(`Total: $${total.toFixed(2)}`, 150, y);
  
  // Save the PDF
  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  
  // Open PDF in new tab
  window.open(pdfUrl, '_blank');
  
  // Send email (you'll need to set up EmailJS account and template)
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: 'customer@example.com',
        total: total.toFixed(2),
        items: cart.map(item => `${item.name} x${item.quantity}`).join(', '),
      },
      'YOUR_PUBLIC_KEY'
    );
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}