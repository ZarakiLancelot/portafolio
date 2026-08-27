import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Resetear el formulario después del envío
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="mb-16 scroll-mt-16 pt-16 -mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Envíame un mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <Button type="submit" className="w-full">
              Enviar mensaje
            </Button>
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
