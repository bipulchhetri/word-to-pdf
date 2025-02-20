import React from 'react'

const How = () => {
  return (
    <section class="py-1">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
            <div class="w-full flex-col justify-start items-center gap-3 flex">
                <h2 class="w-full text-center text-white-900 text-4xl font-bold font-manrope leading-normal">How It Works</h2>
                <p class="w-full text-center text-white-500 text-base font-normal leading-relaxed">Easily convert Word documents to PDF in just three simple steps. <br></br> No software installation is required—just upload, convert, and download your file hassle-free!</p>
            </div>
            <div class="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
                <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                        <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">1</h3>
                        <h4 class="self-stretch text-center text-pink-500 text-2xl font-semibold leading-8">Choose File</h4>
                    </div>
                    <p class="self-stretch text-center text-white-400 text-base font-normal leading-relaxed">Click the upload button and select your Word document (.doc or .docx) from your device.</p>
                </div>
                <svg class="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                        <h3 class="self-stretch text-center text-pink-600 text-4xl font-extrabold font-manrope leading-normal">2</h3>
                        <h4 class="self-stretch text-center text-red-600 text-xl font-semibold leading-8">Click Convert </h4>
                    </div>
                    <p class="self-stretch text-center text-white-400 text-base font-normal leading-relaxed">Hit the "Convert File" button to start the conversion process. It will quickly transform your Word file into a PDF.</p>
                </div>
                <svg class="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                        <h3 class="self-stretch text-center text-green-600 text-4xl font-extrabold font-manrope leading-normal">3</h3>
                        <h4 class="self-stretch text-center text-blue-500 text-xl font-semibold leading-8">Download PDF</h4>
                    </div>
                    <p class="self-stretch text-center text-white-400 text-base font-normal leading-relaxed">Once the conversion is complete, download your new PDF instantly and save it to your device.</p>
                </div>
            </div>
        </div>
    </div>
</section>
                                        
  )
}

export default How