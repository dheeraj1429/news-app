import React from 'react';
import * as styled from './CartComponent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

function CartComponent({ data }) {
   return (
      <div className={styled.container}>
         {data.value.map((el, index) => (
            <div className="p-4" key={index}>
               <div className={`${styled.cart} shadow-lg`}>
                  <Link href={el?.url}>
                     <div className="flex items-center">
                        <div>
                           <p className="text-gray-700 text-md md:text-xl font-bold">
                              PEPE Meme Coin Hysteria Pushes Ethereum Gas Fees
                              to 1-Year High
                           </p>
                        </div>
                        <div className={styled.img_div}>
                           <Image
                              width={200}
                              height={200}
                              src={el?.image?.thumbnail?.contentUrl || ''}
                              alt={el?.image?.thumbnail?.contentUrl}
                           />
                        </div>
                     </div>
                  </Link>
                  <p className="mt-3 text-gray-500">
                     {el?.description.length >= 150
                        ? `${el?.description.slice(0, 150)}...`
                        : el?.description}
                  </p>
                  <div className="mt-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                           <div className={styled.logo}>
                              <Image
                                 src={
                                    el?.provider?.[0]?.image?.thumbnail
                                       ?.contentUrl || ''
                                 }
                                 width={40}
                                 height={40}
                                 alt={el?.provider?.[0]?.name}
                              />
                           </div>
                           <p>{el?.provider?.[0]?.name}</p>
                        </div>
                        <div>
                           <p>
                              {/* {dayjs(el?.datePublished).format(
                                 'DD MMM YY h:m:s A'
                              )} */}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default CartComponent;
