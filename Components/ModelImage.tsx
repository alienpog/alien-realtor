'use client'

import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useAppSelector } from "../redux/hooks";
import { RootState } from '@/redux/store';
import { useAppDispatch } from "../redux/hooks";
import {imageclose} from "@/redux/slices/ImagePut";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ImageMagnifier from "./ImageMagnifier";



function ModelImage() {

  const image = useAppSelector((state :RootState) => state.ImageReducer.value);
  const dispatch = useAppDispatch();
  return (
    <div>
        <Transition appear show={image? true: false} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={()=>{dispatch(imageclose())}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#F6E3C7] bg-opacity-80"/>
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto ">               
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      >     
                      <Dialog.Overlay className="w-full h-full px-4 flex flex-col items-center justify-center">
                        <div className="w-full flex justify-end mb-7">
                        <XMarkIcon className="w-8 h-8 text-[#995323] font-extrabold cursor-pointer" onClick={()=>{dispatch(imageclose())}} />
                        </div>
                        {/* @ts-ignore */}
                      <ImageMagnifier src={image } alt={`model-image-${image}`}/>
                      </Dialog.Overlay>
                      </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default ModelImage