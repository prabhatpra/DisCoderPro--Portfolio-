import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="prabhatprajapati01@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8409363297" Image={FiPhone} />
      <SingleInfo text="Ranchi Jharkhand, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
