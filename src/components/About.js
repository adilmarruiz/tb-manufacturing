import { useState } from "react";

function About()
{   
    const [message, setMessage] = useState('');

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    return(
        <div className="flex-1 grid justify-items-center content-center p-4">
            <div className="text-slate-50 bg-yellow-700 rounded-3xl mx-44 mb-4">
                <h1 className="text-3xl text-center bg-clip-content">
                    WE CREATE BRANDING SOLUTIONS
                </h1>
                <div className="space-y-4 text-justify py-10 p-6">
                    <p>
                        Here at TB Manufacturing we create Branding Solutions. Our products are created with 
                        highest quality materials and are designed to be branded with your logo, giving you 
                        fantastic exposure each time they're used. Choose between our great range of 
                        products.
                    </p>
                    <p>
                        Your clients and guests will be impressed with your professionally printed name and 
                        logo on these durable products
                    </p>
                    <p>
                        Some of our most popular promotional bag items are the durable 
                        backpacks, coolers, lunch bags, and drawstring bag. There are plenty 
                        of options to combine!
                    </p>
                    <p>
                        Have an idea in mind & don't see it here? For any especial order, contact 
                        us, and we will turn your ideas into reality! We offer a wide range of sizes 
                        and color, ask for color avalability. We will be glad to help you with your 
                        request
                    </p>
                </div>
            </div>
            <div class="block max-w-sm w-full rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h3 className='text-yellow-500'>Send us a message</h3>
                    <div class="relative mb-4" data-te-input-wrapper-init>
                        <textarea type="email" class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:opacity-100 motion-reduce:transition-none dark:text-neutral-200 bg-neutral-600" value={message} onChange={handleMessage}/>
                    </div>
                    <a type="button" class="rounded bg-slate-200 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-slate-800 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    data-te-ripple-init data-te-ripple-color="light" href={`mailto:sales@tbmanufacturing.com?subject=Information products&body=${message}`}>
                        Send Email
                    </a>
            </div>
        </div>
    );
}

export default About;