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
    return (
        <div className='px-24 py-14'>
            <div className='text-2xl'>Checkout</div>
            <div className='flex justify-between'>
                <div className='mt-6 w-[50%]'>
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
                        <div>input</div>
                    </Sections>
                </div>
                <div>
                    input left
                </div>
            </div>
        </div>
    );
};

export default Checkout;