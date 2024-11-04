import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Lets get Connect
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my latest projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.linkedin.com/in/wasif-ali-khan-949b1b212/" target='_blank' rel='noopener noreferrer'>
                    Connect
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.jpg" />
        </div>
    </div>
  )
}