import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";

const encodeFormData = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: si un bot llenó este campo oculto, descartamos en silencio.
    if (e.target["bot-field"].value) {
      return;
    }

    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact", ...formData }),
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="mb-16 scroll-mt-16 pt-16 -mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Envíame un mensaje</h3>
          <form
            name="contact"
            onSubmit={handleSubmit}
            netlify="true"
            netlify-honeypot="bot-field"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                No llenar si eres humano: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground mb-1"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <Button type="submit" className="w-full" disabled={status === "submitting"}>
              {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
            </Button>
            {status === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                ¡Mensaje enviado! Te responderé lo antes posible.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Hubo un problema al enviar tu mensaje. Intenta de nuevo o escríbeme
                directamente por correo.
              </p>
            )}
          </form>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Información de contacto
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="text-primary" />
              <a
                href="mailto:einsen.vasquez.velasquez@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                einsen.vasquez.velasquez@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-primary" />
              <a
                href="tel:+50255353148"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +502 5535-3148
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
