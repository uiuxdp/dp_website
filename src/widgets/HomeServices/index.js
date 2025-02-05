"use client";
import { useHomeServices } from "./useHomeServices";
import ServiceCard from "@/components/ServiceCard";
import style from "./HomeServices.module.scss";

export default function HomeServices() {
  const { main } = useHomeServices();

  return (
    <section ref={main} className={`py-20 ${style.section}`}>
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Discover our comprehensive range of services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} data={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: "/images/make-a-report.svg",
    title: "Reporting Services",
    content: "All smart reporting services under the same bundle.",
  },
  {
    icon: "/images/traffic-service.svg",
    title: "Traffic Services",
    content: "Everything related to traffic services, including fine inquiry and payment.",
  },
  {
    icon: "/images/get-a-permit.svg",
    title: "Permit Services",
    content: "Get any permit through the diverse permits bundle.",
  },
  {
    icon: "/images/get-a-certificate.svg",
    title: "Certificate Services",
    content: "Apply and obtain any certificate approved by Dubai Police easily.",
  },
  {
    icon: "/images/explore-civic-hub.svg",
    title: "Community Services",
    content: "Enjoy using a variety of smart and essential community services.",
  },
  {
    icon: "/images/explore-hemaya.svg",
    title: "Hemaya Services",
    content: "Explore Hemaya's services with our intuitive guide.",
  },
]; 