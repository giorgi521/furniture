import React from 'react';
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from '../ui/textarea';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from '../ui/button';
import Image from 'next/image';
import { useCart } from '../helper/context';
import useGetTotalCartValue from '../helper/getTotalCartPrice';
  


interface Props {
    children: React.ReactNode;
    title: string;
}

const Sections = ({children, title}:Props)=> {
    return <div className="flex flex-col py-4 gap-4">
        <div className='text-2xl font-bold'>{title}</div>
        <div className='flex flex-col gap-6'>
            {children}
        </div>
    </div>
}

const Checkout = () => {   
    const {
        totalPrice,
    } = useGetTotalCartValue()
    const {state:{cart}} = useCart();


    return (
        <div className='px-24 py-14'>
            <div className='text-2xl'>Checkout</div>
            <div className='flex justify-between items-start mt-6'>
                <div className='w-[50%]'>
                    <Sections title="Customer information">
                      <Input
                        type='text'
                        placeholder='UserName or email eddress'
                       />
                    </Sections>
                    <Sections title="Billing details">
                        <div className='flex gap-4'>
                            <Input
                            type='text'
                            placeholder='first name'
                            />
                            <Input
                            type='text'
                            placeholder='last name'
                            />
                        </div>
                        <Input
                            type='text'
                            placeholder='Company name (optional)'
                        />

                        <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                        </Select>

                        <div className='flex gap-4'>
                            <Input
                            type='text'
                            placeholder='House number and Street name'
                            />
                            <Input
                            type='text'
                            placeholder='Apartment, suite, unit etc. (optional)'
                            />
                        </div>

                        <div className='flex gap-4'>
                            <Input
                            type='text'
                            placeholder='Town / City'
                            />
                           
                            <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Theme"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                            </Select>

                             <Input
                            type='text'
                            placeholder='Postcode / ZIP'
                            />
                        </div>

                        <Input
                            type='number'
                            placeholder='Phone'
                        />


                    </Sections>
                    <Sections title="Additional information">
                      <Textarea placeholder="Type your message here." />
                    </Sections>
                    <Sections title="Payment">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    </Sections>

                    <Button className='w-full mt-8'>
                        Place order
                    </Button>
                </div>
               {Boolean(totalPrice) && <div className='w-[40%]'>
                <Sections title="Your order">
                    <div className='rounded-md border-darkGray border-2 h-[400px] py-4 flex flex-col justify-between'>
                      <div className='flex justify-between border-b-2 border-darkGray px-4'>
                         <div className='text-gray'>Product</div>
                         <div className='text-gray'>Subtotal</div>
                      </div>
                      <div className='py-4 h-[250px] overflow-auto'>
                        {cart.map(({image,title,id,quantity,price})=> (
                            <div key={id} className='flex justify-between border-b-2 border-darkGray px-4 py-2 items-center'>
                                <div className='flex gap-4 items-center'>
                                <div className='w-10 h-10 md:w-16 md:h-16 rounded-md relative bg-darkGray flex items-center justify-center overflow-hidden'>   
                                <Image src={image} alt={title} width={100} height={100} />
                                </div>
                                <div>{title}</div>
                                 </div>
                                 <div>{price}$</div>
                            </div>
                        ))}
                      </div>
                      <div className='flex justify-between p-4 border-t-2 border-darkGray'>
                        <div>Subtotal</div>
                        <div>{totalPrice}$</div>
                      </div>
                      <div className='flex justify-between p-4 border-t-2 border-darkGray'>
                        <div>total</div>
                        <div>{totalPrice+20}$</div>
                      </div>
                    </div>
                </Sections>
                </div>}
            </div>
        </div>
    );
};

export default Checkout;