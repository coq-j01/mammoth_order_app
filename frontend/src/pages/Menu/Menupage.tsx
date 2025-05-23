import CloseHeader from "../../components/Header/CloseHeader";
import { AnimatePresence, motion } from "framer-motion";
import { IsClose } from "../../types/common";
import Menulist from "./Menulist";
import { useState } from "react";
import Settingpage from "../Setting/Settingpage";

export default function Menupage({ onClose }: IsClose) {
const [isSettingOpen, setIsSettingOpen] = useState(false);
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="h-screen p-3 overflow-auto">
        <CloseHeader onClose={onClose} />
        <div className="p-1">
          <div className="flex flex-row">
            <p className="text-xl font-extrabold">정채빈</p>
            <p className="mt-1">님</p>
          </div>
          <button
            className="ml-1 text-gray-400 font-semibold text-[10px]"
            onClick={()=>setIsSettingOpen(true)}
          >
            계정설정 &gt;
          </button>
        </div>
        <Menulist />
        <div className="flex flex-row p-2 mt-[5%]">
          <div className="w-10 h-10 mr-4">
            <img
              src="src/assets/logo/naver_logo.png"
              alt="네이버 로고"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-10 h-10 mr-4">
            <img
              src="src/assets/logo/facebook_logo.jpg"
              alt="페이스북 로고"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-10 h-10 mr-4">
            <img
              src="src/assets/logo/instagram_logo.png"
              alt="인스타그램 로고"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isSettingOpen && <Settingpage onClose={() => setIsSettingOpen(false)} />}
        </AnimatePresence>
    </motion.div>
  );
}
