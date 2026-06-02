const WhatsAppCta = () => {
  const clickCta = async () => {
    const payload = {
      widget: "whatsapp",
      ndid: "5617a084-5783-4bac-b299-bdb6e8e471bb",
      hid: "41913874",
      pageUrl: window.location.href,
      websiteName: window.location.hostname,
      phoneNumber: "+919759349941",
      message: "Hello, I'm interested in your offer.",
    };
    try {
      const response = await fetch(
        "https://2f60-2409-40d6-1195-a5a4-a08e-2e0a-6c00-148d.ngrok-free.app/api/v1/widget/click",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

     const data = await response.json();
     window.open(data.result.doc.whatsappUrl, "_blank");
     console.log("WhatsApp CTA click response:", data);
    } catch (error) {
      console.error("Error clicking WhatsApp CTA:", error);
    }
  };
  return <button onClick={clickCta}>Enter</button>;
};

export default WhatsAppCta;

// https://2f60-2409-40d6-1195-a5a4-a08e-2e0a-6c00-148d.ngrok-free.app/api/v1/widget/click
