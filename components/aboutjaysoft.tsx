import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";

export default function AboutJaysoft() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Image
          src="https://www.jaybranding.com/wp-content/uploads/2022/01/Frame-s2-2048x1536.jpg"
          width="640px"
          height="480px"
        />
      </div>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8 align-top">
        JAYsoft cung cấp các giải pháp phần mềm website tập trung vào nền tảng
        Wordpress và phát triển các app xoay quanh nền tảng hiện có của quý
        doanh nghiệp như react, react native.
        <ul className="list-disc list-outside mx-10 ">
          <li>Xây dựng website Wordpress</li>
          <li>Xây dựng phần mềm web app</li>
          <li>Xây dựng web app Reactjs</li>
          <li>Xây dựng mobile app React Native</li>
        </ul>
      </div>
    </section>
  );
}
