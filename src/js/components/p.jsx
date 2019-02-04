import React from 'react';
import { MDBDataTable } from 'mdbreact';


const DatatablePage = () => {
  const data = {
    // columns: [
    //   {
        
    //     label: 'Image',
    //     field: 'img',
    //     width: 150
    //   },
    //   {
    //     label: 'Title',        
    //     field: 'title',
    //     width: 270
    //   },
      
    // ],



    rows:  [
      {
      img: [ <img src="https://www.xda-developers.com/files/2019/01/Samsung-Gear-IconX-Featured-284x170_c.jpg" />],
      title:'Samsung’s Galaxy Buds wireless earphones get certified by the FCC, may launch with the Galaxy S10',
      description:'The smartphone industry has evolved a lot in the last year, but one of the most annoying trends is the removal of the 3.5mm headphone jack from flagship smartphones. Ever..',
  },
  
  {
      ima:[ <img src="https://www.xda-developers.com/files/2019/01/oppo-pop-up-selfie-284x170_c.png" />],
      title:'A new OPPO smartphone with a pop-up selfie camera leaks in live images',
      description:'OPPO is one of the largest smartphone manufacturers in the world, though their presence in the United States and Europe is basically nonexistent. Data from the second quarter of 2018...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/07/Oppo-Find-X-Display-284x170_c.jpg" />],
      title:'OPPO Find X’s kernel source code is now available',
      description:'The OPPO Find X was the first ever smartphone with a slider mechanism, giving it a truly bezel-less design in a time when most device makers were opting for notches....',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/oppo-find-x-kernel-source-code" />],
      title:'The Xiaomi POCO F1’s camera performance gets rated by DxOMark',
      description:'The POCO F1 is one of several flagship smartphones from Xiaomi that was released in 2018. What set it apart from the rest was its affordability in highly price-conscious markets...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/10/pocophone-f1-featured-284x170_c.png" />],
      title:'Binary Watch Face brings the 1s and 0s to your Wear OS smartwatch because why not',
      description:'You’re either a watch person or you aren’t. Before cell phones became so popular, watches were much more attractive to carry around because they are the most convenient way to...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/widget-timeline-calendar-events-amazfit-pace-stratos-verge" />],
      title:'Widget Timeline shows your calendar events on the Amazfit Pace/Stratos/Verge',
      description:'Smartwatches are in a bit of a strange place right now. Android Wear (now known as Wear OS) had a great start with multiple OEMs jumping on board. However, the..',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/magisk-module-lg-ux-tweaks-lg-v30" />],
      title:'This Magisk Module offers a lot of LG UX tweaks for the LG V30',
      description:'Magisk Modules are a simple way to apply system-level mods to your device without having to get your hands dirty and make changes to your system files manually. All you...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/google-plus-shutdown-data-breach" />],
      title:'[Update: April 2nd] Google+ is shutting down for consumers after potential major data breach',
      description:'Google+ was introduced in 2011 as the tech giant’s response to the rising social network phenomenon and as a rival to Facebook, Twitter, and other social networks. Unfortunately, though, it...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/nexus-5-mountain-wallpaper-284x170_c.jpg" />],
      title:'Parallax 3D Wallpaper is a Nexus 5 inspired live wallpaper',
      description:'The Google Nexus 5 is one of the most beloved devices of all time in the Android enthusiast community. It offered great hardware for the time and an even greater...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/meizu-zero-284x170_c.jpg" />],
      title:'[Update: Indiegogo] Meizu Zero is the first phone without any ports or physical buttons',
      description:'One of the main ways smartphones have changed over the years is the simplification of hardware. It was common for devices to have a physical keyboard, physical home buttons, and...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/huawei-mate-20-pro-super-macro-mode" />],
      title:'[Update: Mate 20 X too] Huawei Mate 20 Pro update brings Super Macro Mode and January 2019 patches',
      description:'The Huawei Mate 20 Pro has had a good month so far. Just a few days after being named the top smartphone on DxOMark’s camera rankings, Huawei is pushing out...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Samsung-Galaxy-A50-2-284x170_c.jpg " />],
      title:'Samsung Galaxy A50 frame leak reveals waterdrop notch, in-display fingerprint scanner, triple rear cameras',
      description:'Samsung’s Galaxy A series has evolved from being cheaper alternatives to their flagship series to become the experiment grounds for upcoming features. The company is increasingly utilizing the Galaxy A...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/kodi-featured-284x170_c.jpg" />],
      title:'Kodi 18 is now out with support for Android TV Leanback, gaming emulators, DRM decryption, and more',
      description:'Kodi is the most popular, free and open-source software for managing your personal multimedia collection, both offline and online. Its cross-platform nature lets you install it on almost any machine,...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/samsung-1tb-ufs-chip-284x170_c.jpg" />],
      title:'Samsung is now making 1TB UFS chips for mobile devices',
      description:'Samsung is the largest flash storage manufacturer in the smartphone industry. They supply Universal Flash Storage units for so many OEMs. The company just announced that they started mass producing...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/12/OnePlus-Red-Logo-284x170_c.png" />],
      title:'[Update: Paused] Latest OxygenOS beta for the OnePlus 6T/6/5T/5 adds quick reply support for landscape mode and more',
      description:'Owners of OnePlus devices from 2018 and 2017 are currently receiving a new open beta updated rolled out to their device. This includes the OnePlus 5, OnePlus 5T, OnePlus 6,...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/06/oppo-find-x-2-1-284x170_c.jpg" />],
      title:'OPPO RX17 Pro, RX17 Neo, and Find X launch in the UK',
      description:'Following the recent expansion of Xiaomi to the UK and Ireland, OPPO is next up to make the leap onto western European soil. The company has already been active in...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Screenshot-2019-01-29-at-1.27.53-PM-284x170_c.png" />],
      title:'Gmail for Android is getting a Material Theme redesign',
      description:'Following the whitewashing Material Theme-ifying of Gmail for the Web, Google will be applying the same design scheme to its Gmail mobile apps. In addition to going overboard with the...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/razer-phone-2-vs-rog-phone-284x170_c.png" />],
      title:'[Video] Asus ROG Phone vs Razer Phone 2 – Which gaming phone should you choose?',
      description:'The “gaming phone” market really picked up steam in 2018. Two of the top gaming smartphones were from manufacturers that are well-known in the gaming community. The Asus ROG Phone...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2017/09/LG-V30-Moroccan-Blue-Feature-Image-Purple-284x170_c.png" />],
      title:'Enable DTS 3D Stereo sound on all LG V30 variants [Root]',
      description:'There are a number of cases where an OEM is using hardware in their device but then goes in and uses the software to limit its capabilities. The enthusiast community...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/04/Google-Camera-AA-284x170_c.jpg" />],
      title:'Android Pie devices are not required to support Camera HAL3',
      description:'The upgrade to Android Pie brought a lot of great new features like the redesigned recent apps overview, gesture controls, adaptive battery, app actions, adaptive brightness, and many more changes...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/02/LG-Logo-284x170_c.jpg" />],
      title:'LG V50 ThinQ may be the company’s first 5G smartphone, launch alongside LG G8',
      description:'It appears that LG is taking the unprecedented step of releasing its next V-series flagship alongside the G-series, as Korean blog ETNews indicated that the LG V50 ThinQ 5G will...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/76DC1116-9855-434A-B377-392F5EFC8710-284x170_c.jpeg" />],
      title:'Fortnite for Android now supports Bluetooth controllers and 60FPS for 3 devices',
      description:'Fortnite is one of the most popular games in the world right now with over 200 million total players and millions of active players every day. Back in August, it...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/PaceUp-is-an-altimeter-for-the-Amazfit-Pace-Stratos-and-Verge-284x170_c.png" />],
      title:'PaceUp is an altimeter for the Amazfit Pace, Stratos, and Verge',
      description:'Some would say the smartwatch market isn’t as healthy as it once was, but there are some companies out there which have risen above the others and have gained quite...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/11/razer-phone-2-video-review-284x170_c.jpg" />],
      title:'Logo+ is an open source version of the Chroma app on the Razer Phone 2',
      description:'Nowadays, the smartphone industry is as challenging for newcomers as it gets. It’s not so easy to stay relevant when dozens of flagship-tier smartphones are released each year. We all...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/12/Samsung-Galaxy-S10-Plus-284x170_c.png" />],
      title:'Samsung Pay app confirms at least one Galaxy S10 model has an in-display fingerprint scanner',
      description:'For the past few months, we have analyzed Samsung’s software updates to find out what the company is working on behind-the-scenes. From our analysis, we have found evidence for which...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/06/Huawei-logo-284x170_c.png" />],
      title:'U.S. Government charges Huawei with stealing T-Mobile’s trade secrets',
      description:'Depending on which analytics company you ask, Huawei is the second or third biggest smartphone manufacturer in the world, surpassing even Apple in some fiscal quarters, and the number one...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/12/ASUS-ZenFone-Max-Pro-M2_5-284x170_c.png" />],
      title:'Asus ZenFone Max Pro M2 gets an update that brings scene detection to the camera',
      description:'Asus isn’t exactly the largest smartphone manufacturer in the world, but their presence in developing countries is still respectable. Most of their userbase resides in Asian countries, so that’s exactly...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/sale_15856_primary_image_wide-284x170_c.jpg" />],
      title:'Launch a Career in Graphic Design with This Extensive Adobe Bundle',
      description:'There’s never been a better time to work in graphic design. Companies ranging from small startups to Fortune 500 conglomerates are eager to bring on qualified graphic designers who can...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Honor-View-20-Hands-on-Phantom-Red-V-1-284x170_c.jpg" />],
      title:'Honor View20 with 48MP camera launched in Pakistan for 37,999',
      description:'Honor’s latest flagship, the Honor View20, has all the features that one can expect out of a late 2018 flagship. Launched at an event in China in December 2018 and...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/oneplus-6t-mclaren-vs-pixel-3-xl-284x170_c.jpg" />],
      title:'[Video] OnePlus 6T McLaren Edition vs Google Pixel 3 XL Comparison',
      description:'The OnePlus 6T and Pixel 3 XL were two of the most exciting devices of 2018. OnePlus even added a special “McLaren” edition with more RAM and extra fast charging....',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/09/amazon-fire-hd-8-284x170_c.png" />],
      title:'The 2018 Amazon Fire HD 8 has been unlocked and rooted',
      description:'Apart from offering cool web services and an online market, Amazon also sells Android devices from time to time. Last year, they released the Amazon Fire HD 8—a $79.99 tablet...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/sale_17430_primary_image_wide-284x170_c.jpg" />],
      title:'Master the Technology Behind Cryptocurrencies with This Blockchain Bundle',
      description:'Watching Bitcoin’s meteoric and somewhat inevitable rises and falls can be a nerve-wracking experience. But, Bitcoin isn’t the only cryptocurrency around, and it’s fair to assume that cryptocurrencies are here...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/06/Chrome-OS-Android-284x170_c.png" />],
      title:'Google Chrome for Android is testing a new search-friendly omnibox',
      description:'Google Chrome’s Omnibar feature is something that has attracted a lot of people to the browser. Not only can it suggest recently visited websites, bookmarked websites, and common web searches...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/03/wear-os-feature-1-284x170_c.png" />],
      title:'engineer turns a Wear OS smartwatch into a Bluetooth mouse',
      description:'There has been a lot of criticism about Google’s mobile operating system over the years. Originally called Android Wear, the team felt it would be better suited under the name...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2017/05/google-tensorflow-android-284x170_c.png" />],
      title:'TensorFlow Lite adds support for mobile GPUs on Android',
      description:'TensorFlow is a symbolic math software library for dataflow programming across a range of tasks. It’s typically used for machine learning applications such as neural networks. The software library was developed...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/07/ASUS-ZenFone-5Z-Image-284x170_c.jpg" />],
      title:'[Update: India too] ASUS ZenFone 5Z’s Android Pie update begins rolling out in Taiwan',
      description:'The ASUS ZenFone 5Z has been on the market for about half a year now, though it was initially announced at Mobile World Congress back in February. The device sports...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/smart-navigation-bar-featured-284x170_c.png" />],
      title:'Navigation Bar lets you add photo slideshows to your nav bar',
      description:'One of the most praised key features of Android is the customization capabilities. You can change everything starting from fonts with Magisk all the way up to System UI with...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Samsung-Galaxy-M20_8-284x170_c.png" />],
      title:'Samsung launches the new Galaxy M10 and Galaxy M20 in Pakistan for 7,990 and 10,990',
      description:'Samsung has finally launched the new Galaxy M-series, starting off with the new Galaxy M10 and the Galaxy M20 in India. The new devices are the first to launch with...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/AnTuTu-AI-Benchmark-284x170_c.png" />],
      title:'releases a benchmark to test the AI performance of smartphones',
      description:'The past years have seen more and more companies focus on AI (Artificial Intelligence) as a means to distinguish their product from the competition. Uses of AI range from understanding...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/04/xposed-module-feature-284x170_c.png" />],
      title:'Framework gets unofficially ported for Android Pie: Install at your own risk',
      description:'The Xposed Framework is a great tool for modding your Android smartphone or tablet. The framework hooks into ART (the Android runtime) and lets apps, called Xposed Modules, execute their...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/02/sqaure7x-284x170_c.jpg" />],
      title:'The Honor 7X will likely get EMUI 9 based on Android Pie after all',
      description:'The Honor 7X was launched in late 2017 with EMUI 5.1 based on Android 7.0 Nougat, which was slightly disappointing since Android Oreo was available at the time. Honor justified...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Xiaomi-Redmi-6-Pro-1-284x170_c.png" />],
      title:'[Download] Xiaomi Redmi 6 Pro gets a closed Android Pie beta in China',
      description:'MIUI 10 has rolled out to many Xiaomi devices in the past few months, and the Xiaomi Redmi 6 Pro got the Android Oreo-based update back in November. While the...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2016/10/Mate-9-Feature-284x170_c.jpg" />],
      title:'Huawei Mate 9 gets the EMUI 9 (Android Pie) update in China',
      description:'If Huawei has proven themselves in one area, it’s in providing Android 9 Pie updates for many of their devices. Huawei’s heavily customized EMUI 9 may not be your jam,...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/nokia_1_plus_featured-284x170_c.png" />],
      title:'Nokia 1 Plus appears online with the MediaTek MT6739, 1GB RAM, and Android 9 Pie (Go Edition)',
      description:'HMD Global has taken the Android world by storm since their debut with Nokia-branded devices. They sold more smartphones (over 70 million units) than Google in just two years since...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Android-Q-XDA-Featured-284x170_c.png" />],
      title:'Android Q may ship with new Font, Icon Shape, and Accent Color Overlays',
      description:'One of the many reasons I prefer the Android OS over iOS is customization. I can pretty heavily customize the EMUI 9 software running on my Huawei Mate 20 X....',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/08/Android-Q-XDA-Featured2-284x170_c.png" />],
      title:'Android Q May Block Background Clipboard Reads, Better Protect Your Media Files, Support Downgrading Apps, and more',
      description:'Every new version of Android comes with new features, which means Android needs new permissions to gate access to these features. I found a lot of new permissions in Android...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Android-Q-Face-ID-Featured-Image-2-284x170_c.png" />],
      title:'Exclusive: Google is working on a Face ID-like feature for Android Q',
      description:'While Android smartphones supported fingerprint scanners long before the Apple iPhone did, Android devices are playing catch up when it comes to secure biometric facial authentication hardware. The Apple iPhone...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/google-duo-web-284x170_c.png" />],
      title:'Google may launch a web client for its Duo video chat service',
      description:'Google Duo was launched alongside Allo back in 2016. While Allo focused on text communication, Duo was the video chat counterpart. Allo’s demise has been well documented, but Duo has...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Image-001-7-284x170_c.png" />],
      title:'Chromecast Ultra can’t stream photos from Google Photos at 4K resolution',
      description:'The Google Chromecast Ultra was launched as an upgrade over the previous Chromecast. Featuring 4K playback with HDR and Dolby Vision, the Chromecast Ultra also came with an Ethernet port...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2017/03/Chrome-Feature-Image-XDA-Portal-Red-284x170_c.png" />],
      title:'Google Chrome will get protection from drive-by-downloads',
      description:'Drive-by-downloads are one of the most dangerous things non-tech savvy people can come across on the web. The term is used when the website initiates downloading a file without users...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/10/nokia-3.1-plus-feature-image-284x170_c.jpg" />],
      title:'HMD Global will bring Nokia smartphones to US and Canadian carriers',
      description:'HMD Global has been pumping out Nokia-branded Android phones for a while now. Many of these devices are compatible with U.S. and Canadian carriers, but they’ve never been sold directly...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/LG-G8-ThinQ-Feature-Image-284x170_c.png" />],
      title:'Exclusive: This is the LG G8 ThinQ, LG’s First 2019 Flagship Smartphone',
      description:'In 2018, smartphone manufacturers hopped on the notch bandwagon to trim as much of the top bezel as they could. Towards the end of the year, we saw device makers...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/google-io-2019-284x170_c.png" />],
      title:'Google I/O 2019 starts May 7th at the Shoreline Amphitheatre',
      description:'Google loves a good puzzle and they typically use Google I/O as an excuse to get people tinkering. The annual puzzle went out just a couple of hours ago, but...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/facebook-messenger-instagram-whatsapp-284x170_c.png" />],
      title:'Facebook plans to unify the messaging infrastructure of WhatsApp, Instagram, and Facebook Messenger',
      description:'Facebook’s CEO and co-founder Mark Zuckerberg plans to unify the infrastructure of all three of Facebook’s messaging services — WhatsApp, Instagram, and Facebook Messenger. All three services will continue operating...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/google-pixel-smartwatch-284x170_c.png" />],
      title:'Possible Pixel Watch code-names may have just appeared',
      description:'We’re far from a Google Pixel 4 release, but already possible codenames are beginning to pop up on the AOSP Gerrit. While the code-names “salmon” and “medeka” are likely to...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/06/Linux-Tux-Feature-Image-XDA-Orange-284x170_c.png" />],
      title:'Linux kernel 5.0 RC1 is available with ARM big.LITTLE EAS support, F2FS fixes, and much more',
      description:'While we don’t typically cover what happens in the mainline Linux kernel realm, it’s important for us to keep track of what’s going on with each new kernel release since...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/10/Pixel_3GEN_2018_hero.max-1000x1000-284x170_c.png" />],
      title:'SultanXDA releases a custom kernel for the Google Pixel 3 and Pixel 3 XL',
      description:'If you’ve ever owned a OnePlus device and considered tinkering with it, chances are you might have come across a few custom kernels on our forums. If so, then you...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/11/pubg-mobile-banner-284x170_c.jpg" />],
      title:'Download: PUBG Mobile Beta updated to v0.11.0 with Resident Evil 2’s zombie mode and more',
      description:'Late last year, we had leaked the patch notes of PUBG Mobile’s 0.10.0 update, which had brought over new features like the Vikendi snow map, Snowmobile vehicle, cross-server matchmaking and...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/11/Xiaomi-Mi-A2_11-284x170_c.png" />],
      title:'Some Xiaomi Mi A2 users are facing bootloops after the January 2019 update',
      description:'The Xiaomi Mi A2 is one of the best mid-range devices in the Android One program. I owned the device for a few months and it never let me down. Its...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/12/Samsung-Galaxy-A8s-is-official-with-LCD-display-hole-and-no-headphone-jack-284x170_c.png" />],
      title:'[Update: Galaxy A9 Pro] Samsung’s first Infinity-O Galaxy A8s may launch outside of China, starting with Korea',
      description:'We’ve been talking about the Galaxy A8s for a few months now and there were many things that were unclear when we first began seeing rumors about the device. Since...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2017/02/Nokia-5-284x170_c.png" />],
      title:'[Update: Stable Update Available] Internal Android Pie beta for the Nokia 5 leaks online',
      description:'It seems like almost every day we’re writing about a Nokia phone getting Android Pie. The latest device to get the goods is the Nokia 5, but this is not...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/survey-284x170_c.jpg" />],
      title:'Are you up for this coding challenge? Test your skills in the New Developer Economics survey & win prizes!',
      description:'Are you the best developer in your organisation or even your city? There’s only one way to find out- test your knowledge! The new Developer Economics survey Q4 2018 is...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/11/Call-Screening-284x170_c.jpg" />],
      title:'Pressing a volume button lets you hear the other party in Google Pixel’s Call Screen',
      description:'One of the features that got a lot of attention with the launch of the Pixel 3 was Call Screen. This crazy feature allows you to make Google Assistant take...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2017/09/Samsung-Galaxy-Note-8-Orchid-Grey-Feature-Image-Yellow-284x170_c.png" />],
      title:'(Android Pie) beta now available for the US unlocked Samsung Galaxy Note 8 and Galaxy S8/S8+',
      description:'2018 has been one of the greatest years for Samsung. Both of their flagship series of smartphones turned out better than ever, and they received mostly positive feedback on both...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2017/01/googlevoice-284x170_c.png" />],
      title:'[Update: Rolling out] Google Voice is finally testing making Phone Calls over Wi-Fi',
      description:'Google and messaging apps: name a more iconic duo. Okay, while we like to joke about Google’s penchant for creating new messaging apps, the company does still update their older...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/huawei-5g-mwc-1-284x170_c.png" />],
      title:'Huawei’s foldable 5G smartphone will be announced next month',
      description:'5G and foldable phones are all the rage at the minute, so what if we combine those two trendy features? Huawei plans to do just that and will be announcing their...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/08/detachable-chromebook-tablet-284x170_c.png" />],
      title:'Chrome OS 73 brings Instant Tethering to non-Pixel smartphones',
      description:'In addition to making it possible to add user-designated top-level folders in My Files, Chrome OS 73 adds the ability to instantly tether your Chromebook to your Android phone, even...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Galaxy_S10_Live_Image_7-1-284x170_c.jpg" />],
      title:'Samsung Galaxy S10 & Galaxy S10+ photos reveal both have triple cameras',
      description:'We’re less than a month away from Samsung Unpacked 2019, where we will finally see the Samsung Galaxy S10 and the company’s foldable phone. Earlier this week we outlined everything...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Vivo-Apex-2019-284x170_c.png" />],
      title:'Vivo Apex 2019 has no ports and a full-screen fingerprint scanner',
      description:'While we slowly inch towards an all-display, bezelless future, we may also be moving towards a no-port, no-button future. After getting rid of the headphone jack, companies are now targeting...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/02/LG-Logo-284x170_c.jpg" />],
      title:'smartphone will have a Snapdragon 855 and 4000mAh battery',
      description:'LG is one of the more mainstream Android OEMs despite many of their shortcomings. Just like their Korean rival, LG intends on showing off a 5G smartphone pretty soon. The...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/ShareSave-by-Xiaomi-284x170_c.png" />],
      title:'Xiaomi launches ShareSave, an e-commerce platform to let people buy tech products from China',
      description:'When we talk about Xiaomi, the first product that comes to mind are the smartphones. But Xiaomi is much more than just a smartphone company. The Chinese giant perceives itself...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Xiaomi-Redmi-Note-7-284x170_c.jpg" />],
      title:'Xiaomi Redmi Note 7 supports Camera2 API so Google Camera ports can now work without an unlocked bootloader',
      description:'Google Camera ports have become very popular on our forums, as many see them as an easy way to dramatically improve picture quality on a wide range of devices. With...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Motorola-Moto-G7-284x170_c.png" />],
      title:'Motorola Brazil accidentally leaks the entire Moto G7 series',
      description:'It seems Motorola’s Moto G7 event on February 7th in Brazil will hold very few surprises. Press renders of the entire Moto G7 lineup had leaked some time back, and...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/franco-kernel-featured-284x170_c.png" />],
      title:'Franco Kernel Manager now lets you flash almost any ZIP file from the app',
      description:'If you’ve ever cared about flashing a custom kernel on your Android device, then you’ve probably heard of Franco kernel by XDA Recognized Developer franciscofranco. His custom kernel is one...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Samsung-Galaxy-S10-Blockchain-KeyStore-284x170_c.jpg" />],
      title:'Samsung Galaxy S10 leaks again with a Blockchain KeyStore for cryptocurrency wallets',
      description:'We are getting closer to the launch date of the Samsung Galaxy S10 series of smartphones. Samsung confirmed last month that they will announce the Galaxy S10 on February 20 at...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/poweramp-android-auto-support-284x170_c.jpg" />],
      title:'Poweramp gets Android Auto support and improved Google Assistant integration',
      description:'Poweramp is arguably one of the most popular audio players for Android. While it’s user interface never turned any heads, it was the functionality that had users loving the app....',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/11/Sony-Xperia-XZ4-2-284x170_c.png" />],
      title:'The Sony Xperia XZ4 could have a ridiculously tall 21:9 display',
      description:'We haven’t heard a ton about the upcoming Sony Xperia XZ4 yet, which will most likely be shown off next month at MWC. A couple of months ago, we got...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/08/moto-z-gen-3-fullbleed-5g_m-284x170_c.jpg" />],
      title:'Motorola Moto Z3 on Verizon gets the Android Pie update with 5G Moto Mod support',
      description:'Last Summer, the Moto Z3 was announced on Verizon along with support for a yet-to-be-released 5G Moto Mod. The phone itself launched with Android 8.1 Oreo, but Motorola promised it would...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/huawei-twitter-delete-284x170_c.png" />],
      title:'Huawei says a bug caused EMUI to delete pictures saved from Twitter',
      description:'Earlier this week, a story made the rounds about Huawei deleting images downloaded from the Twitter app. Several users were able to replicate this issue in this thread on the Android...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2016/04/news-xiaomi-redmi-note-3-005-284x170_c.jpg" />],
      title:'Xiaomi Redmi Note 3 gets its final MIUI 10 stable update',
      description:'In a bit of news that will draw mixed emotions, the Xiaomi Redmi Note 3 has received its final MIUI 10 stable release in the form of a MIUI 10.2.1.0...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Image-009-284x170_c.png" />],
      title:'Xiaomi’s President teases a double foldable smartphone',
      description:'While 2019 will be dominated by bezelless designs and display holes, we will also see more of foldable smartphones. Samsung is all set to launch its foldable phone along with...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/07/moto-g6_1-284x170_c.png" />],
      title:'[Update: Moto G6 Play Too] Motorola Moto G6 is reportedly getting an Android Pie soak test',
      description:'While the Motorola Moto G7 series is just around the corner, Motorola has not forgotten the Moto G6 when it comes to updates (which is surprising because Lenovo hasn’t been the...',
  },
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/08/android-9-pie-logo-284x170_c.jpg" />],
      title:'HMD Global unveils the Android Pie update roadmap for Nokia smartphones',
      description:'If we have to choose one thing to give credit to HMD Global for, I’d pick their commitment to software updates. They always tend to release the latest and greatest...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Nokia-X7-China-284x170_c.png" />],
      title:'Nokia Extensions is a Magisk Module that brings China-only features to global Android One models',
      description:'Nokia releases two variants of its smartphones: one is the Global variant of the device, which runs Android One, while the other is the Chinese variant of the device, which...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/pixel-3-note-9-284x170_c.png" />],
      title:'Google Pixel 3 and Samsung Galaxy Note 9 top DxOMark’s new selfie camera test',
      description:'In my opinion, cameras are the number one benchmark when it comes to choosing your next flagship device. That is mainly because many of the smartphones share most of the...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/10/project-stream-featured-1-284x170_c.png" />],
      title:'[Update: Test over] Google’s Project Stream lets you play high-end games in Google Chrome',
      description:'Streaming video games is yet another cool trend of 2018. We’ve seen big-name services like NVIDIA GeForce and PlayStation Now do it, and now it looks like Google is trying to...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/09/Moto-G6-Plus-1024x803-284x170_c.jpg" />],
      title:'[Update: Stable rolling out] Moto G6 Plus gets an Android Pie soak test in Brazil',
      description:'Over the last three major releases of Android, Google has stuck to a release window sometime within the month of August. It’s rare to see an Android OEM release a...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/11/hangouts-284x170_c.png" />],
      title:'Google will transition “classic” Hangouts users to Chat ',
      description:'One of the biggest Google stories of 2018 was the downfall of Hangouts. The platform had long been seemingly abandoned, but we finally got some news about its future. In...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/pixel_3_xl_hands_on_19-284x170_c.jpg" />],
      title:'Google Pixel 3 XL mod increases exposure time and ISO in Google Camera [Root]',
      description:'Many times the hardware in our smartphones are capable of more than the stock software allows. These limitations can be implemented for many reasons, including protection of the hardware, preventing...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Honor-View-20-Hands-on-Photo-19-284x170_c.jpg" />],
      title:'Honor View20 launches internationally with a 48MP and 3D ToF rear cameras and an in-display front camera',
      description:'Honor’s latest flagship smartphone, the Honor View20, was announced late last month at an event in China. At an event in France, the company has announced their plans to sell...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Honor-View20-featured-284x170_c.png" />],
      title:'Honor View20 Review: The First Flagship Smartphone with a 48MP Camera',
      description:'The Honor View20 has already been officially available in China (as the Honor V20) since late December, but now the device has been launched internationally in Europe as well. We...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/12/Honor8x_Holiday_Body-284x170_c.jpg" />],
      title:'Honor 8X EMUI 9 (Android Pie) beta is now open',
      description:'Anytime a new smartphone is launched after Google has released a new version of Android we wonder if the device will have the new software on it. Android Pie was...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Moto-G7-Feature-Image-284x170_c.png" />],
      title:'Motorola Moto G7 series is launching on February 7th in Brazil',
      description:'We’ve been hearing about the Motorola Moto G7 and all of its siblings for a while now. The whole lineup was expected to be launched in Brazil, much before the...',
  },
  
  {
  img:[ <img src="https://www.xda-developers.com/files/2018/08/Android-Q-XDA-Featured2-284x170_c.png" />] ,
      title:'Android Q will give carriers more ways to SIM lock phones',
      description:'It has been just a week since we put out an exclusive on the early build of Android Q. According to the build we’ve got, the latest iteration of the...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/05/dcr-community-platforms-telegram-p-1080-284x170_c.png" />],
      title:'Telegram v5.2 brings global permissions for groups and undo deleting chats',
      description:'Telegram is one of the most popular messaging services on almost any platform. Just on Android alone, it boasts over 100 million users, with an average rating of 4.4 on...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Xiaomi-Redmi-6-Pro-284x170_c.png" />],
      title:'Kernel sources for the Xiaomi Redmi 6 Pro, Redmi 5 Plus, and Mi 5X are now available',
      description:'Xiaomi has been on a spree to release and update kernel sources of as many devices as it can. In just about 10 days, the OEM has spread the kernel...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Samsung-ISOCELL-Slim-3T2-284x170_c.png" />],
      title:'Samsung’s new 20MP ISOCELL Slim 3T2 sensor is designed for smartphones with display holes',
      description:'Samsung Electronics has introduced its smallest high-resolution image sensor, the ISOCELL Slim 3T2, which is also touted as being the smallest image sensor in the industry at a mere 1/3.4-inches....',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/bigstock-179589433-284x170_c.jpg" />],
      title:'Paid Apps VS Free Alternatives: Is it Worth the Money?',
      description:'It is an acknowledged truth that people love to receive services and goods free of charge. In our difficult financial times, when prices on everything are constantly growing, people’s desire...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2017/12/samsunglogo-284x170_c.png" />],
      title:'Samsung may stop production of Galaxy S9 and Galaxy Note 9 in India following changes made to Make in India plan',
      description:'In order to promote manufacturing within India, the Indian government had introduced the Phased Manufacturing Programme (PMP) in August 2017 through an official notification issued by the Government of India’s...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/IMG_20190106_141751-284x170_c.jpg" />],
      title:'The OnePlus 6T is a gaming champ even if it’s not a “Gaming Phone”',
      description:'OnePlus has always been particularly proud of the speed of their smartphones, which by all accounts they should be. Since the OnePlus 3T, the company has made speed their top...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/GALAXY-S10-FEATURE-284x170_c.png" />],
      title:'The Samsung Galaxy S10 Lite, Galaxy S10, and Galaxy S10+: What we know so far',
      description:'Samsung’s Galaxy S line of Android smartphones is the company’s most popular smartphone brand. This year is the 10th anniversary of Samsung’s first Galaxy S phone, and the company is...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/IMG_20190106_141751-284x170_c.jpg" />],
      title:'The OnePlus 6T is a gaming champ even if it’s not a “Gaming Phone”',
      description:'OnePlus has always been particularly proud of the speed of their smartphones, which by all accounts they should be. Since the OnePlus 3T, the company has made speed their top...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/GALAXY-S10-FEATURE-284x170_c.png" />],
      title:'The Samsung Galaxy S10 Lite, Galaxy S10, and Galaxy S10+: What we know so far',
      description:'Samsung’s Galaxy S line of Android smartphones is the company’s most popular smartphone brand. This year is the 10th anniversary of Samsung’s first Galaxy S phone, and the company is...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Vivo-Y89_4-284x170_c.png" />],
      title:'Vivo Y89 launches with 6.3-inch display and Snapdragon 626',
      description:'Chinese OEM Vivo has silently launched the new Vivo Y89 in China, an entry level device with a 6.26″ notched LCD of FHD+ resolution and a Qualcomm Snapdragon 626 SoC. The...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/image005-284x170_c.jpg" />],
      title:'Countdown to the Honor View20 Launch in Paris',
      description:'Honor’s first big launch of the year is happening in Paris, France. The Honor View20 aims to raise the bar for smartphone cameras with its 48MP sensor. The event will...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/9687453153-284x170_c.jpg" />],
      title:'DOOGEE Launches Kickstarter for Digital Walkie-talkie Module for the S90',
      description:'Ever found yourself in a situation where your smartphone has no network and you really have to get in touch with someone nearby? The solution for this would be a...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/10/pixel-3-colors-284x170_c.png" />],
      title:'Google Pixel 3 and Pixel 3 XL are $150 off on the Google Store',
      description:'The Pixel 3 and the Pixel 3 XL showcase the best of what Google has to offer on Android. With impressive performance, mind-blowing camera performance, and quick software updates, the...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2017/06/FF-Focus-Blog-Header_Android-01-284x170_c.png" />],
      title:'Mozilla will add an ad-blocker to Firefox Focus 9.0',
      description:'Firefox Focus was launched in June of 2017 as a privacy-focused browser with no bells and whistles. The main features of the browser include its small install size, ad tracking...',    
  },
  
  {
      
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Samsung-Gear-Sport-284x170_c.png" />],
      title:'Samsung is rolling out Tizen 4 to the Samsung Gear S3 and Gear Sport smartwatches',
      description:'The rest of the world may have forgotten about smartwatches, but Samsung has not, so far. The company is treating its customers to a new software update as it has...',
  
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2018/10/Xiaomi-Mi-Mix-3-Feature-284x170_c.jpg" />],
      title:'Notification Repeater fixes broken notifications on some MIUI 10 devices like the Xiaomi Mi Mix 3',
      description:'Xiaomi’s MIUI is famous (or infamous, depending on your perspective) for the widespread changes it does to the Android OS. One of these changes is the aggressive battery management, which...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/Exynos-7-7904-284x170_c.png" />],
      title:'Samsung Exynos 7904 mid-range SoC announced with an emphasis on the Indian market',
      description:'Today, Samsung Electronics has announced its latest addition to the Exynos 7 Series SoCs: the new Samsung Exynos 7904. This SoC is targeted towards phones in the mid-range segment and...',
  },
  
  {
      img:[ <img src="https://www.xda-developers.com/files/2019/01/LG-V40-ThinQ-284x170_c.png" />],
      title:'LG V40 ThinQ with 6.4″ QHD+ OLED display and five cameras launched in Pakistan for 49,990',
      description:'The LG V40 ThinQ was launched in Q4 2018, bringing the display notch to LG’s V-series. But that was not everything that the LG V40 ThinQ had going for itself...',
  }
   ]
  };
  return (
      <div>
    <MDBDataTable
      data={data}
    />

     </div>
  );
}

export default DatatablePage;