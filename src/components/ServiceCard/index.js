"use client";
import Link from "next/link";
import Image from "../Image/image";

const ServiceCard = ({ data }) => {
  return (
    <div className="service-card p-4  hover:-translate-y-8 hover:delay-0 delay-75	 hover:scale-105 will-change-transform ease-in-out duration-500  rounded-2xl bg-white h-full">
      {/* 0.6s transform cubic-bezier(0.64, 0, 0.37, 1) */}
      <div className="aspect-[1/1] w-[60px] relative mb-3">
        <Image
          src={`${data?.icon}`}
          className="object-cover"
          fill
          alt={data?.title}
        />
      </div>
      <h2 className="text-lg mb-1 font-medium">{data?.title}</h2>
      <p className="text-sm line-clamp-2">{data?.content}</p>
    </div>
  );
};

export default ServiceCard;
