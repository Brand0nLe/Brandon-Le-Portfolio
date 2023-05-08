export default async function getResumePdf(): Promise<Blob> {
  const response = await fetch('../../assets/images/BrandonResume2023.pdf');
  return await response.blob();
}