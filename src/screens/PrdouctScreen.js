// src/components/ProductScreen.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../Cart';
import './Productscreen.css';
import { toast } from 'react-toastify';


// ... mockProducts array ...


const mockProducts = [

  {id:1,
      name: 'Jack Velvet couch',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'Sofa Set',
      image: require('./images/ls1.jpg'), // 679px × 829px
       price: 25000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'A Comfortable couch in white texture',
    },
    {id:2,
      name: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'sofa',
      image: require('./images/sofa1.jpg'), // 679px × 829px
      price: 25000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'cozy 3 seater sofa in beige colour',
    },
    {id:3,
      name: 'Orange Polyester double Seater Sofa',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'sofa',
      image: require('./images/sofaset2.jpg'), // 679px × 829px
       price: 10000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Stylish orange double seater sofa',
    },
    {id:4,
      name: 'Cosco Lounge seat In Pink Colour',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Lounge seat',
      image: require('./images/sofaset3.jpg'), // 679px × 829px
       price: 4000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'Comfy foam lounge seat',
    },
    {id:5,
      name: 'Camden Fabric Sofa in greyish colour',
      // slug: 'Camden Fabric Sofa in greyish colour',
      category: 'sofa set',
      image: require('./images/sofaset4.jpg'), // 679px × 829px
       price: 22500, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'stylish greyish colour sofa set',
    },
    {id:6,
      name: 'premium gold shade sofa',
      // slug: 'premium gold shade sofa',
      category: 'premium sofaset',
      image: require('./images/sofaset5.jpg'), // 679px × 829px
       price: 75000, 
      countInStock: 13,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.2,
      numReviews: 10,
      description: 'premium quality golden texture sofa set',
    },
    
    {id:7,
      name: 'velvet fabric single seater grey sofa',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'sofa',
      image: require('./images/sofaset6.jpg'), // 679px × 829px
       price: 12000, 
      countInStock: 5,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 3.9,
      numReviews: 10,
      description: 'Comfortable thick velvet fabric greyish colour sofa ',
    },
    {id:8,
   name: 'Lounge seat In bright orange Colour',
      // slug: 'Lounge seat In bright orange Colour',
      category: 'lounge seat',
      image: require('./images/sofaset7.jpg'),
      price: 7000,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.3,
      numReviews: 10,
      description: 'Asthetic Bright Orange Lounge seat ',
    },
    {id:9,
      name: 'One sided grey cushioned seat',
      // slug: 'One sided grey cushioned seat',
      category: 'sofa',
      image: require('./images/sofaset8.jpg'),
      price: 12000,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.3,
      numReviews: 10,
    
      description: 'comfortable seating spot with one sided cushioned seat',
    },
    {id:10,
      name: 'Movable Lounge seat In white Colour',
      // slug: 'Movable Lounge seat In white Colour',
      category: 'Lounge seat',
      image: require('./images/sofaset9.jpg'),
      price: 10000,
      countInStock: 15,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.0,
      numReviews: 10,
      description: 'Movable Lounge seat ',
    },
    {id:11,
      name: 'Lounge seat In Teal Colour',
      // slug: 'Lounge seat In Teal Colour',
      category: 'Lounge seat',
      image: require('./images/sofaset10.jpg'),
      price: 5000,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 14,
      description: 'Stylish Lounge seat In Teal Colour ',
    },
    {id:12,
      name: 'Single Sofa In Bright Yellow Colour',
      // slug: 'Single Sofa In Bright Yellow Colour',
      category: 'sofa',
      image: require('./images/sofaset11.jpg'),
      price: 6500,
      countInStock: 5,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Single Sofa In Bright Yellow Colour',
    },
    {
      id:13,
      name: 'Lucita Dining Set With White Marble',
      // slug: 'Lucita Dining Set With White Marble',
      category: 'diningtable',
      image: '/images/dining.jpg', // 679px × 829px
      price: 42550,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Lucita Solid Wood 6 Seater Dining Set With White Marble Top',
    },
    {
      id:14,
      name: 'Venice wood & Marble Dining Set',
      // slug: 'Venice wood & Marble Dining Set',
      category: 'diningtable',
      image: '/images/ld1.jpg', // 679px × 829px
      price: 13000,
      countInStock: 10,
      brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Venice Solid Wood & Marble top 4 Seater Dining Set',
    },
    {
      id:15,
      name: 'Lawson Wood 3 Seater Dining Set',
      // slug: 'Lawson Wood 3 Seater Dining Set',
      category: 'diningtable',
      image: '/images/dining1.jpg', // 679px × 829px
      price: 40820,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Lawson Wood 3 Seater Dining Set',
    },
    {
      id:16,
      name: 'Aoki Solid Wood 3 Seater Dining Set',
      // slug: 'Aoki Solid Wood 3 Seater Dining Set',
      category: 'diningtable',
      image: '/images/dining2.jpg', // 679px × 829px
      price: 10000,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Aoki Solid Wood 3 Seater Dining Set',
    },
    {
      id:17,
      name: 'Jin Solid Wood 4 Seater Dining Set ',
      // slug: 'Jin Solid Wood 4 Seater Dining Set ',
      category: 'diningtable',
      image: '/images/dining3.jpg', // 679px × 829px
      price: 20000,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Jin Solid Wood 4 Seater Dining Set ',
    },
    {
      id:18,
      name: 'Verduru 4 Seater Dining Set',
      // slug: 'Verduru 4 Seater Dining Set',
      category: 'diningtable',
      image: '/images/dining4.jpg', // 679px × 829px
      price: 22000,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Verduru 4 Seater Dining Set',
    },
    {
      id:19,
      name: 'Enigma Marble 4 Seater Dining Set',
      // slug: 'Enigma Marble 4 Seater Dining Set',
      category: 'diningtable',
      image: '/images/dining5.jpg', // 679px × 829px
      price: 22500,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Enigma Marble 4 Seater Dining Set',
    },
    {
      id:20,
      name: 'Zolva Glass Top 4 Seater Dining Set',
      // slug: 'Zolva Glass Top 4 Seater Dining Set',
      category: 'diningtable',
      image: '/images/dining6.jpg', // 679px × 829px
      price: 23890,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Zolva Glass Top 4 Seater Dining Set',
    },
    {
      id:21,
      name: 'Spaulding wooden 5 Seater Dining Set ',
      // slug: 'Spaulding wooden 5 Seater Dining Set ',
      category: 'diningtable',
      image: '/images/diningroom_table3.jpg',
      price: 50000,
      countInStock: 20,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.0,
      numReviews: 10,
      description: 'Spaulding wooden 5 Seater Dining Set ',
    },
    { 
      id:22,
      name: 'Sheesham Wood 6 Seater Dining Set',
      // slug: 'Sheesham Wood 6 Seater Dining Set',
      category: 'diningtable',
      image: '/images/dining8.jpg',
      price: 25000,
      countInStock: 20,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Princeton Sheesham Wood 4 Seater Dining Set',
    },
    {
      id:23,
      name: 'Hemming 4 Seater Dining Table ',
      // slug: 'Hemming 4 Seater Dining Table ',
      category: 'diningtable',
      image: '/images/dining9.jpg',
      price: 24600,
      countInStock: 15,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 14,
      description: 'Hemming 2 Seater Wall Mount Dining Table ',
    },
    {
      id:24,
      name: 'Venice Wood 4 Seater Dining Set',
      // slug: 'Venice Wood 4 Seater Dining Set',
      category: 'diningtable',
      image: '/images/diningroom_table4.jpg',
      price: 65000,
      countInStock: 5,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Venice Solid Wood & Marble top 4 Seater Dining Set',
    },
    {id:25,
      name: 'Norikura Fabric RHS Sectional Sofa',
      // slug: 'Jack Velvet couch In gold texture',
      category: ' Sectional sofa ',
      image: require('./images/sectional3.png'), // 679px × 829px
       price: 25000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'A Comfortable Norikura Fabric RHS Sectional Sofa',
    },
    {id:26,
      name: 'Belita Fabric LHS Sectional Sofa',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: ' Sectional sofa',
      image: require('./images/sectional4.jpg'), // 679px × 829px
      price: 45000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'cozy Belita Fabric LHS Sectional Sofa',
    },
    {id:27,
      name: 'Creata Fabric Lhs Sectional Sofa',
      // slug: 'Orange Polyester double Seater Sofa',
      category: ' Sectional sofa',
      image: require('./images/sectional9.jpg'), // 679px × 829px
       price: 30000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 3.5,
      numReviews: 10,
      description: 'Stylish Creata Fabric Lhs Sectional Sofa in bold yellow colour',
    },
    {id:28,
      name: 'Bingo Velvet RHS 6 Seater Sectional Sofa',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Sectional sofa',
      image: require('./images/sectionalsofa.jpg'), // 679px × 829px
       price: 42000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'Bingo Velvet RHS 6 Seater Sectional Sofa In Grey Colour',
    },
    {id:29,
      name: 'Camden Fabric LHS Sofa in greyish colour',
      // slug: 'Camden Fabric Sofa in greyish colour',
      category: 'sofa set',
      image: require('./images/sectional7.jpg'), // 679px × 829px
       price: 23900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'stylish greyish colour Sectional sofa set',
    },
    {id:30,
      name: 'Bingo Fabric LHS Seater Sectional Sofa ',
      // slug: 'premium gold shade sofa',
      category: 'Sectional sofa',
      image: require('./images/sectional8.png'), // 679px × 829px
       price: 24000, 
      countInStock: 11,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.0,
      numReviews: 10,
      description: 'Bingo Fabric LHS 6 Seater Sectional Sofa In Creamy Cashmere Colour',
    },
    
    {id:31,
      name: 'velvet fabric LHS pink Sectional sofa',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'Sectional sofa',
      image: require('./images/sectional6.jpg'), // 679px × 829px
       price: 30000, 
      countInStock: 5,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 3.9,
      numReviews: 10,
      description: 'Comfortable thick velvet fabric LHS pink Sectional sofa ',
    },
    {id:32,
   name: 'Bingo Velvet LHS 6 Seater Sectional Sofa',
      // slug: 'Lounge seat In bright orange Colour',
      category: 'Sectional sofa',
      image: require('./images/sectional5.jpg'),
      price: 27000,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.3,
      numReviews: 10,
      description: 'Bingo Velvet LHS 6 Seater Sectional Sofa In Grey Colour',
    },
    {id:33,
      name: 'V-Guard Arido P22H-N Personal Air Cooler',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'Personal Air Cooler',
      image: require('./images/cooler1.jpg'), // 679px × 829px
       price: 7000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.9,
      numReviews: 10,
      description: 'V-Guard Arido P22H-N Personal Air Cooler',
    },
    {id:34,
      name: 'BLACK+DECKER Personal Air Cooler',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Personal Air Cooler',
      image: require('./images/cooler2.jpg'), // 679px × 829px
      price: 15000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'BLACK+DECKER REMO45 Personal Air Cooler: 45 LTR I Collapsible Louvers I Antibacterial Honeycomb Pads IInverter Compatible I Rear Wheel Lock I White & Grey',
    },
    {id:35,
      name: 'IBELL High Speed Tower Air Delivery',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'Personal Air Cooler',
      image: require('./images/cooler3.jpg'), // 679px × 829px
       price: 10000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'IBELL High Speed Tower Fan, 25-foot Air Delivery, 4-way Air Flow, Low Power Consumption and Anti-Rust Body (White)',
    },
    {id:36,
      name: 'PMH 25 DLX 24L Personal Air Cooler',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Personal Air Cooler',
      image: require('./images/cooler4.jpg'), // 679px × 829px
       price: 4000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'PMH 25 DLX 24L Personal Air Cooler for home| DuraMarine Pump',
    },
    {id:37,
      name: 'V-Guard Arido R35H-N Air Cooler',
      // slug: 'Camden Fabric Sofa in greyish colour',
      category: 'Personal Air Cooler',
      image: require('./images/cooler5.jpg'), // 679px × 829px
       price: 9500, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'V-Guard Arido R35H-N Room Air Cooler for Home',
    },
    {id:38,
      name: 'DMH 90 Neo 90L Desert Air Cooler',
      // slug: 'premium gold shade sofa',
      category: 'Personal Air Cooler',
      image: require('./images/cooler6.jpg'), // 679px × 829px
       price: 5000, 
      countInStock: 13,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.2,
      numReviews: 10,
      description: 'Bajaj DMH 90 Neo 90L Desert Air Cooler for home with DuraMarine Pump',
    },
    {id:39,
      name: 'Rajasthani Ethnic Wooden Temple',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'Wooden Temple',
      image: require('./images/woodentemple.jpeg'), // 679px × 829px
       price: 5000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Rajasthani Ethnic Handcrafted Wooden Temple',
    },
    {id:40,
      name: 'Rajasthan Art And Craft Temple',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Wooden Temple',
      image: require('./images/temple1.jpg'), // 679px × 829px
      price: 5000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'Rajasthan Art And Craft Wood Home Temple',
    },
    {id:41,
      name: 'Mangal Beautiful Wooden Pooja Stand',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'Wooden Temple',
      image: require('./images/temple2.jpg'), // 679px × 829px
       price: 1000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Mangal Beautiful Wooden Pooja Stand',
    },
    {id:42,
      name: 'DEVGRAH Beautiful Wooden Pooja Stand',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Wooden Temple',
      image: require('./images/temple3.jpg'), // 679px × 829px
       price: 4000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'DEVGRAH Beautiful Wooden Pooja Stand',
    },
    {id:43,
      name: 'Kamdhenu art & craft Temple(ROJALI)',
      // slug: 'Camden Fabric Sofa in greyish colour',
      category: 'Wooden Temple',
      image: require('./images/temple4.jpg'), // 679px × 829px
       price: 2500, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Kamdhenu art & craft Temple(ROJALI)',
    },
    {id:44,
      name: 'Kamdhenu art and craft Wooden Temple',
      // slug: 'premium gold shade sofa',
      category: 'Wooden Temple',
      image: require('./images/temple5.jpg'), // 679px × 829px
       price: 2699, 
      countInStock: 13,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.2,
      numReviews: 10,
      description: 'Kamdhenu art and craft Wooden Temple',
    },
    
    {id:45,
      name: 'Hoodwin Mangal for Home Pooja Mandir',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'Wooden Temple',
      image: require('./images/temple6.jpg'), // 679px × 829px
       price: 2000, 
      countInStock: 5,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 3.9,
      numReviews: 10,
      description: 'Hoodwin Mangal Beautiful Wooden Pooja Stand for Home Pooja Mandir',
    },
    {id:46,
   name: 'Mandir with Copper Aluminium Plating ',
      // slug: 'Lounge seat In bright orange Colour',
      category: 'Wooden Temple',
      image: require('./images/temple7.jpg'),
      price: 2800,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.3,
      numReviews: 10,
      description: 'Handicrafts Pooja Temple Big Size for Home|Wooden Mandir with Copper Aluminium Plating with Unique Thickness and Design|Decorative Wooden Temple Size (9x12 Inches) ',
    },
    {id:47,
      name: ' Umi Coffee Table',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'wooden table',
      image: require('./images/l.jpg'), // 679px × 829px
       price: 5000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: ' Umi Coffee Table',
    },
    {id:48,
      name: 'Handmade Wooden Outdoor Adirondack',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'wooden table',
      image: require('./images/t2.jpg'), // 679px × 829px
      price: 5000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'Handmade Wooden Outdoor Adirondack',
    },
    {id:49,
      name: 'Solimo Belloy Nested Side Table',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'wooden table',
      image: require('./images/t3.jpg'), // 679px × 829px
       price: 4900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Solimo Belloy Nested Side Table',
    },
    {id:50,
      name: 'Antique Wooden Fold-able Side Table',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'wooden table',
      image: require('./images/t4.jpg'), // 679px × 829px
       price: 4000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'Antique Wooden Fold-able Side Table',
    },
    {id:51,
      name: 'Eagle Furniture Wooden End Table',
      // slug: 'Camden Fabric Sofa in greyish colour',
      category: 'wooden table',
      image: require('./images/t5.jpg'), // 679px × 829px
       price: 2500, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Eagle Furniture Wooden End Table',
    },
    {id:52,
      name: 'Arrow Crafts Glass Coffee Table',
      // slug: 'premium gold shade sofa',
      category: 'Glass table',
      image: require('./images/t9.jpg'), // 679px × 829px
       price: 3099, 
      countInStock: 8,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.2,
      numReviews: 10,
      description: 'Arrow Crafts Glass Coffee Table Round Gold Coffee Table for Small Space Modern Simple',
    },
    
    {id:53,
      name: 'Arrow Crafts Side Table Glass Top',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'Glass table',
      image: require('./images/t7.jpg'), // 679px × 829px
       price: 2390, 
      countInStock: 5,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 3.9,
      numReviews: 10,
      description: 'Arrow Crafts Side Table Nightstand with Glass Top',
    },
      
    {id:54,
      name: 'Nesting Marble Coffee Table ',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'wooden table',
      image: require('./images/t8.jpg'), // 679px × 829px
       price: 7000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.3,
      numReviews: 10,
      description: 'Nesting Marble Coffee Table ',
    },
    {id:55,
      name: 'Mid Century Modern Accent Chair',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'wooden Chair',
      image: require('./images/d.jpg'), // 679px × 829px
       price: 25000, 
      countInStock: 5,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.0,
      numReviews: 10,
      description: ' ANJHOME Mid Century Modern Accent Chair',
    },
    {id:56,
      name: 'ANNJOE Faux Leather Accent Chair ',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Chair',
      image: require('./images/ch1.jpg'), // 679px × 829px
      price: 5900, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'ANNJOE Faux Leather Accent Chair Arm Chairs',
    },
    {id:57,
      name: 'ginoya brothers Stainless Steel',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'Steel chair',
      image: require('./images/ch2.jpg'), // 679px × 829px
       price: 3900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'ginoya brothers Stainless Steel',
    },
    {id:58,
      name: 'Home Furnishings Wicker Papasan Chair ',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Chair',
      image: require('./images/ch3.jpg'), // 679px × 829px
       price: 4700, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'OSP Home Furnishings Wicker Papasan Chair with 360-Degree Swivel, Grey Frame with White Cushion',
    },
    {id:59,
      name: 'Modern Accent Chair',
      // slug: 'Camden Fabric Sofa in greyish colour',
      category: 'Chair',
      image: require('./images/ch5.jpg'), // 679px × 829px
       price: 3500, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'White Modern Accent Chair',
    },
    {id:60,
      name: 'Cane Chair with Cushion',
      // slug: 'premium gold shade sofa',
      category: 'Cane chair',
      image: require('./images/ch6.jpg'), // 679px × 829px
       price: 3999, 
      countInStock: 8,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.2,
      numReviews: 10,
      description: 'Cane Chair with Cushion',
    },
    
    {id:61,
      name: 'Plastic Jordan Chair',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'Plastic chair',
      image: require('./images/ch7.jpg'), // 679px × 829px
       price: 1000, 
      countInStock: 5,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 3.9,
      numReviews: 10,
      description: 'Cello Furniture Dealz Plastic Jordan Chair',
    },
      
    {id:62,
      name: 'Winntage Furniture Sheesham Wood  ',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'Chair',
      image: require('./images/ch8.jpg'), // 679px × 829px
       price: 3400, 
      countInStock: 3,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.3,
      numReviews: 10,
      description: 'Winntage Furniture Sheesham Wood  ',
    },
    {id:63,
      name: ' SIHOO M102C Office Chair ',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'office chair',
      image: require('./images/officechair.jpg'), // 679px × 829px
       price: 5000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: ' SIHOO M102C Ergonomic Office Chair ',
    },
    {id:64,
      name: 'Kepler Brooks Office Chair ',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'office chair',
      image: require('./images/office1.jpg'), // 679px × 829px
      price: 12000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'Kepler Brooks Office Chair ',
    },
    {id:65,
      name: 'CELLBELL Tauras Office Chair',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'office chair',
      image: require('./images/office2.jpg'), // 679px × 829px
       price: 3900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'CELLBELL Tauras Lite C100 Mesh High Back Office Chair',
    },
    {id:66,
      name: ' Seoul Office Chair',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'office cahir',
      image: require('./images/office3.jpg'), // 679px × 829px
       price: 4000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: ' Seoul Office Chair, Mid Back Mesh Ergonomic Home Office Desk Chair',
    },
    {id:67,
      name: 'INNOWIN Mini Jazz Office Chair',
      // slug: 'Camden Fabric Sofa in greyish colour',
      category: 'office chair',
      image: require('./images/office4.jpg'), // 679px × 829px
       price: 3500, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'INNOWIN Mini Jazz Mesh Mid-Back Ergonomic Home Office Chair',
    },
    {id:68,
      name: 'CELLBELL Desire C104 Office Chair',
      // slug: 'premium gold shade sofa',
      category: 'office chair',
      image: require('./images/office5.jpg'), // 679px × 829px
       price: 3199, 
      countInStock: 8,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.2,
      numReviews: 10,
      description: 'CELLBELL Desire C104 Mesh Mid Back Ergonomic Office Chair',
    },
    
    {id:69,
      name: 'Jupiter Superb | Office Chair',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'office chair',
      image: require('./images/office6.jpg'), // 679px × 829px
       price: 2890, 
      countInStock: 5,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 3.9,
      numReviews: 10,
      description: 'Jupiter Superb | Office Chair | 3 Years Warranty | Smart Multi-Tilt Lock Mechanism | Ergonomic Chair for Home & Office |Mesh Fabric | High Back (Black)',
    },
      
    {id:70,
      name: 'Oxford Leatherette  Office Chair',
      // slug: 'velvet fabric single seater grey sofa',
      category: 'office chair',
      image: require('./images/office7.jpg'), // 679px × 829px
       price: 6990, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.3,
      numReviews: 10,
      description: 'Oxford Ergonomic Leatherette Executive High Back Revolving Desk Office Chair',
    },
    {id:71,
      name: 'Harper Wooden Queen Size Bed ',
      // slug: 'Lorem ipsum dolor sit 1',
      category: 'bed',
      image: '/images/c.jpg', // 679px × 829px
      price: 12210,
      countInStock: 10,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: 'Harper Wooden Double Size, Queen Size Bed ',
    },
    {id:72,
      name: 'Solimo Ashburn King Bed',
      // slug: 'Lorem ipsum dolor sit 2',
      category: 'bed',
      image: '/images/beds2.jpg',
      price: 12500,
      countInStock: 20,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.0,
      numReviews: 10,
      description: 'Solimo Ashburn Engineered Wood King Bed',
    },
    {id:73,
      name: 'Solimo Medusa Queen Bed',
      // slug: 'Lorem ipsum dolor sit 3',
      category: 'bed',
      image: '/images/beds3.jpg',
      price: 11500,
      countInStock: 15,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 14,
      description: 'Solimo Medusa Engineered Wood Queen Bed with Box Storage ',
    },
    {id:74,
      name: ' Wenge Finish Queen Bed',
      // slug: 'aLorem ipsum dolor sit 4',
      category: 'bed',
      image:'/images/beds4.jpg',
      price: 12000,
      countInStock: 5,
      // brand: 'Lorem ipsum dolor sit amet',
      rating: 4.5,
      numReviews: 10,
      description: ' Solimo Aquilla Engineered Wood Wenge Finish Queen Bed',
    },
    {id:75,
      name: 'Springtek Mattress',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'Mattress',
      image: require('./images/o.jpg'), // 679px × 829px
       price: 7000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: ' Springtek Mattress | 7 Years Warranty ',
    },
    {id:76,
      name: 'SleepyCat Original Mattress',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Mattress',
      image: require('./images/m1.jpg'), // 679px × 829px
      price: 9000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'SleepyCat Original Ortho Mattress',
    },
    {id:77,
      name: 'Wakefit Mattress',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'Mattress',
      image: require('./images/m2.jpg'), // 679px × 829px
       price: 4800, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Wakefit Mattress|10 years warranty',
    },
    {id:78,
      name: 'Wakefit Mattress',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Mattress',
      image: require('./images/m3.jpg'), // 679px × 829px
       price: 8900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'Wakefit Mattress|3years warranty',
    },
    {id:79,
      name: ' Wakefit Wardrobe',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'Wardrobe',
      image: require('./images/j.jpg'), // 679px × 829px
       price: 25000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: ' Wakefit Wardrobe | 1 Year Warranty | Cupboard, Wooden Almirah for Clothes, Wardrobe Wooden, Twill 2 Door Without Mirror, No Drawer & No Hanging Space, 18MM Panels, with Assembly (Frosty White)',
    },
    {id:80,
      name: 'Nilkamal Engineered Wood Wardrobe',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Wardrobe',
      image: require('./images/w4.jpg'), // 679px × 829px
      price: 15000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'Nilkamal Engineered Wood Wardrobe',
    },
    {id:81,
      name: 'Nilkamal Wood Wardrobe',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'Wardrobe',
      image: require('./images/w2.jpg'), // 679px × 829px
       price: 14900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Nilkamal Engineered Wood Wardrobe',
    },
    {id:82,
      name: 'Kayden 3 Door Wardrobe',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Wardrobe',
      image: require('./images/w3.jpg'), // 679px × 829px
       price: 12000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'Kayden 3 Door Wardrobe',
    },
    {id:83,
      name: ' Marble Finish Coffee Table ',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'Center table',
      image: require('./images/sofa4.jpg'), // 679px × 829px
       price: 5000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: ' Welltrade Shoppee Modern Marble Finish Coffee Table Set of 2',
    },
    {id:84,
      name: 'G Fine Wooden Center',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Center table',
      image: require('./images/ct2.jpg'), // 679px × 829px
      price: 7600, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'G Fine Furniture Wooden Center',
    },
    {id:85,
      name: 'MATTERHORN Wooden Coffee Table',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'Center table',
      image: require('./images/ct3.jpg'), // 679px × 829px
       price: 7900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'MATTERHORN Wooden Coffee Table',
    },
    {id:86,
      name: '(frosty white)Wooden Coffee Table',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Center table',
      image: require('./images/ct4.jpg'), // 679px × 829px
       price: 3000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'MATTERHORN Wooden Coffee Table',
    },
    {id:87,
      name: 'Heavy Metal Shoe Rack',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'Shoe rack',
      image: require('./images/R4.jpg'), // 679px × 829px
       price: 2100, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Heavy Metal Shoe Rack',
    },
    {id:88,
      name: 'Prima Delta Shoe Storage',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Shoe rack',
      image: require('./images/R1.jpg'), // 679px × 829px
      price: 1300, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'Prima Delta 1 Plastic Cabinet for Shoe Storage',
    },
    {id:89,
      name: 'Ratandhara Furniture Shoe Rack',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'Shoe rack',
      image: require('./images/R2.jpg'), // 679px × 829px
       price: 1900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'Ratandhara Furniture Shoe Rack',
    },
    {id:90,
      name: 'DeckUp Plank Wood Shoe Rack ',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Shoe rack',
      image: require('./images/R3.jpg'), // 679px × 829px
       price: 2300, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'DeckUp Plank Bei 3-Door Engineered Wood Shoe Rack with Wooden Legs',
    },
    {id:91,
      name: ' Kraft Wood Sideboard and Cabinet',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'Cabinate and Sideboards',
      image: require('./images/cabinate.jpg'), // 679px × 829px
       price: 5000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: ' Kraft Bazaar Solid Wood Sideboard and Cabinet',
    },
    {id:92,
      name: 'Budhakish Sideboard Cabinet',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Cabinate and Sideboards',
      image: require('./images/cab1.jpg'), // 679px × 829px
      price: 5000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'Budhakish Furniture Wooden Sideboard Cabinet',
    },
    {id:93,
      name: ' Solid Sheesham Wood Sideboard',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'Cabinate and Sideboards',
      image: require('./images/cab2.jpg'), // 679px × 829px
       price: 4900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'SONA ART & CRAFTS Solid Sheesham Wood Sideboard',
    },
    {id:94,
      name: 'G Fine Wooden Sideboard Cabinet',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'Cabinate and Sideboards',
      image: require('./images/cab3.jpg'), // 679px × 829px
       price: 4000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'G Fine Furniture Wooden Sideboard Cabinet',
    },
    {id:95,
      name: 'luxurious master bed',
      // slug: 'Jack Velvet couch In gold texture',
      category: 'luxurious bed',
      image: require('./images/luxi1.jpg'), // 679px × 829px
       price: 25000, 
      countInStock: 7,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'soft and comfy master bed|3 years warranty',
    },
    {id:96,
      name: 'classic gold texture dinning ',
      // slug: 'Eton 3 Seater Fabric Sofa In Beige Colour',
      category: 'Dinning table',
      image: require('./images/diningluxi.jpg'), // 679px × 829px
      price: 15000, 
      countInStock: 12,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.4,
      numReviews: 10,
      description: 'classic gold texture dinning 5 seater |4 years warranty',
    },
    {id:97,
      name: 'luxurious offwhite wardrobe',
      // slug: 'Orange Polyester double Seater Sofa',
      category: 'luxurious wardrobe',
      image: require('./images/luxi3.jpg'), // 679px × 829px
       price: 14900, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.5,
      numReviews: 10,
      description: 'luxurious offwhite wardrobe',
    },
    {id:98,
      name: 'velvet gold texture sofa',
      // slug: 'Cosco Lounge seat In Pink Colour',
      category: 'luxurious sofa',
      image: require('./images/luxi4.jpg'), // 679px × 829px
       price: 24000, 
      countInStock: 10,
      /* brand: 'Lorem ipsum dolor sit amet', */
      rating: 4.1,
      numReviews: 10,
      description: 'thick velvet gold texture sofa|2 years warranty',
    },
    
  
  
   
  

]



function ProductScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productData = mockProducts.find(p => p.id === parseInt(id));
    if (productData) {
      setProduct(productData);
    } else {
      setError('Product not found');
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.name} added to cart!`,{position:'top-center'});
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (product) {
    const { image, rating, brand, countInStock, name, description, price, category } = product;

    return (
      <div className="product-details">
        <img className='product-image' src={image} alt={name} />
        <div className='productsdetailall'>
          <h1 className="product-name">{name}</h1>
          <h3 className="product-name1">{brand}</h3>
          <h6 className="product-price">Price: ₹{price}</h6>
          <h6 className="countInStock">{countInStock} in stock</h6>
          <p className="product-description">{description}</p>
          <button className='product-btn' onClick={handleAddToCart}>Add to Cart</button>
          <Link to="/cart"><div className='view'>
          <button>View Cart</button></div></Link>
          <p className="product-category">Category: {category}</p>
          <h6 className="product-rating">Rating: {rating}</h6>
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default ProductScreen;
