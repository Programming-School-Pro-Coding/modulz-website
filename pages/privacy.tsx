import React from 'react';
import { Container, Box, Heading, Button, Link, Text, Divider, Flex } from '@modulz/radix';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Privacy = () => {
  return (
    <Box>
      <TitleAndMetaTags title="Privacy" />

      <Box mt={6} mb={8}>
        <Container size={1} sx={{ maxWidth: 715 }}>
          <Heading size={4} mb={4} sx={{ letterSpacing: '-.052em' }}>
            Modulz Privacy Notice
          </Heading>

          <Text size={3} sx={{ lineHeight: '21px' }}>
            Last Updated: March 3, 2022
          </Text>

          <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
            Modulz, Inc. provides users with a code-based designing tool to allow our customers to design and prototype with real components. This Privacy Notice is designed to help you understand how we collect, use, process, and share your personal information and to help you understand and exercise your privacy rights.
          </Text>

          <nav>
            <ul style={{ listStyle: 'none', margin: '0 0 15px 0', padding: 0, }}>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Scope</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Personal information we collect</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>How we use your information</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>How we disclose your information</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Your privacy choices and rights</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Security of your information</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>International data transfers </Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Retention of personal information</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Supplemental notice for california residents</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Supplemental notice for Nevada residents</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Children's information</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Other provisions</Text></Link></li>
              <li><Link href="#hello" sx={{ display: 'inline-block' }}><Text as="p" size={3} sx={{ lineHeight: '21px', color: 'inherit' }}>Contact us</Text></Link></li>
            </ul>
          </nav>

          <Heading size="1" id="hello">1. SCOPE</Heading>
          <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
            This Privacy Notice applies to personal information processed by us, including on our websites, mobile applications, and other online or offline offerings. To make this Privacy Notice easier to read, our websites, mobile applications, and other offerings are collectively called “Services.”
          </Text>

          <Heading size="1" sx={{ mb: '5px' }}>2. PERSONAL INFORMATION WE COLLECT</Heading>
          <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>The categories of personal information we collect depend on how you interact with us, our Services, and the requirements of applicable law.  We collect information that you provide to us, information we obtain automatically or through non-automatic methods provided that it is part of the data recording system when you use our Services, and information from other sources such as third-party services and organizations, as described below.</Text>
            
          <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>We do not generally require you to disclose any sensitive information (e.g., details of race, religious belief, sexual orientation or membership of a trade union) to us.  If you do provide us with sensitive information for any reason, you consent to us collecting that information and using and disclosing that information for the purpose for which you disclosed it to us and as permitted by the Australian Privacy Act 1988 (Cth) (“Privacy Act”) and other relevant laws.</Text>
            
          <Heading size="1" sx={{ mb: '5px' }}>A. Information You Provide to Us Directly</Heading>
          <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>We may collect the following personal information that you provide to us.</Text>

              <ul>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Account Creation. We may collect information when you create an account, such as first name, last name,  email address, Twitter handle, and role at company.
                  </Text>
                </li>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Purchases. We may collect personal information and details associated with your purchases, including payment information.  Any payments made via our Services are processed by third-party payment processors. We do not directly collect or store any payment card information entered through our Services, but we may receive information associated with your payment card information (e.g., your billing details).
                  </Text>
                </li>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Your Communications with Us. We may collect personal information, such as email address, phone number, or mailing address when you request information about our Services, register for our newsletter or loyalty program, request customer or technical support, apply for a job, or otherwise communicate with us.
                  </Text>
                </li>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Surveys. We may contact you to participate in surveys. If you decide to participate, you may be asked to provide certain information which may include personal information.
                  </Text>
                </li>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Interactive Features. We and others who use our Services may collect personal information that you submit or make available through our interactive features (e.g., messaging and chat features, commenting functionalities, forums, blogs, and social media pages). Any information you provide using the public sharing features of the Services (referred to herein as “User Content”) will be considered “public,” unless otherwise required by applicable law, and is not subject to the privacy protections referenced herein. Please exercise caution before revealing any information that may identify you in the real world to other users.
                  </Text>
                </li>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Sweepstakes or Contests. We may collect personal information you provide for any sweepstakes or contests that we offer. In some jurisdictions, we are required to publicly share information of sweepstakes and contest winners.
                  </Text>
                </li>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Conferences, Trade Shows, and Other Events. We may collect personal information from individuals when we attend conferences, trade shows, and other events. 
                  </Text>
                </li>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Business Development and Strategic Partnerships. We may collect personal information from individuals and third parties to assess and pursue potential business opportunities. 
                  </Text>
                </li>
                <li>
                  <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>
                    Job Applications. We may post job openings and opportunities on our Services. If you reply to one of these postings by submitting your application, CV and/or cover letter to us, we will collect and use your information to assess your qualifications.
                  </Text>
                </li>
              </ul>
            
            
            
            
            


            
            Information Collected Automatically 
            We may collect personal information automatically when you use our Services:
            Automatic Data Collection. We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), and Internet service provider. We may also automatically collect information regarding your use of our Services, such as pages that you visit before, during and after using our Services, information about the links you click, the types of content you interact with, the frequency and duration of your activities, and other information about how you use our Services. 
            Location Information. We may collect precise location information, such as [insert example from client] or otherwise use our Services.
            Cookies, Pixel Tags/Web Beacons, and Other Technologies. We, as well as third parties that provide content, advertising, or other functionality on our Services, may use cookies, pixel tags, local storage, and other technologies (“Technologies”) to automatically collect information through your use of our Services. 
            Cookies. Cookies are small text files placed in device browsers that store preferences and facilitate and enhance your experience.
            Pixel Tags/Web Beacons. A pixel tag (also known as a web beacon) is a piece of code embedded in our Services that collects information about engagement on our Services. The use of a pixel tag allows us to record, for example, that a user has visited a particular web page or clicked on a particular advertisement. We may also include web beacons in e-mails to understand whether messages have been opened, acted on, or forwarded.
            Our uses of these Technologies fall into the following general categories:
            Operationally Necessary. This includes Technologies that allow you access to our Services, applications, and tools that are required to identify irregular website behavior, prevent fraudulent activity and improve security or that allow you to make use of our functionality;
            Performance-Related. We may use Technologies to assess the performance of our Services, including as part of our analytic practices to help us understand how individuals use our Services (see Analytics below). For example, we may track your in-app activity, including recordings of your gameplay and other interactions with the app;
            Functionality-Related. We may use Technologies that allow us to offer you enhanced functionality when accessing or using our Services. This may include identifying you when you sign into our Services or keeping track of your specified preferences, interests, or past items viewed;
            Advertising- or Targeting-Related. We may use first party or third-party Technologies to deliver content, including ads relevant to your interests, on our Services or on third-party websites.
            See “Your Privacy Choices and Rights” below to understand your choices regarding these Technologies.
            For more information about the specific providers of the Targeting and Analytics cookies used on Modulz’s Services and how to opt out of these cookies, please see “Cookies and Tracking Technologies” table and “Analytics” below.


            Analytics. We may use Technologies and other third-party tools to process analytics information on our Services. Some of our analytics partners include:
            Google Analytics. For more information, please visit Google Analytics’ Privacy Notice. To learn more about how to opt-out of Google Analytics’ use of your information, please click here.
            LinkedIn Analytics. For more information, please visit LinkedIn Analytics’ Privacy Notice. To learn more about how to opt-out of LinkedIn’s use of your information, please click here.
            Mixpanel. For more information about Mixpanel, please visit Mixpanel’s Privacy Notice.
            Social Media Platforms. Our Services may contain social media buttons such as [insert based on client] (that might include widgets such as the “share this” button or other interactive mini programs). These features may collect your IP address, which page you are visiting on our Services, and may set a cookie to enable the feature to function properly. Your interactions with these platforms are governed by the Privacy Notice of the company providing it.
            Information Collected from Other Sources
            We may obtain information about you from other sources, including through third-party services and organizations. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect information about you from that third-party application that you have made available via your privacy settings. 
            
            <Heading size="1" sx={{ mb: '5px' }}>HOW WE USE YOUR INFORMATION</Heading>
            We use your information for a variety of business purposes, including to provide our Services, for administrative purposes, and to market our products and Services, as described below.
            Provide Our Services
            We use your information to fulfil our contract with you and provide you with our Services, such as:
            Managing your information and accounts;
            Providing access to certain areas, functionalities, and features of our Services;
            Answering requests for customer or technical support; 
            Communicating with you about your account, activities on our Services, and policy changes;
            Processing your financial information and other payment methods for products or Services purchased;
            Processing applications if you apply for a job we post on our Services; and
            Allowing you to register for events. 
            Administrative Purposes
            We use your information for various administrative purposes, such as:
            Pursuing our legitimate interests such as direct marketing, research and development (including marketing research), network and information security, and fraud prevention;
            Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for that activity;
            Measuring interest and engagement in our Services; 
            Short-term, transient use, such as contextual customization of ads;
            Improving, upgrading or enhancing our Services; 
            Developing new products and Services;
            Ensuring internal quality control and safety;
            Authenticating and verifying individual identities, including requests to exercise your rights under this policy;
            Debugging to identify and repair errors with our Services;
            Auditing relating to interactions, transactions and other compliance activities;
            Sharing information with third parties as needed to provide the Services;
            Enforcing our agreements and policies; and
            Complying with our legal obligations.
            Marketing and Advertising our Products and Services
            We may use personal information to tailor and provide you with content and advertisements. We may provide you with these materials as permitted by applicable law. 
            Some of the ways we market to you may include email campaigns, custom audiences advertising, and “interest-based” or “personalized advertising,” including through cross-device tracking.
            In Australia, we will only use and disclose your personal information for the purposes of marketing our Services or services of third party organizations where you have consented to us doing so, or as otherwise permitted by law.
            If you have any questions about our marketing practices or if you would like to opt out of the use of your personal information for marketing purposes you may contact us at any time as set forth in “Contact Us” below. 
            Other Purposes
            We also use your information for other purposes as requested by you or as permitted by applicable law.
            Consent.  We may use personal information for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent.  For the sake of clarity, we may need your explicit consent to process your sensitive personal information (e.g., health information, government issued identification, genetic information) for the purpose of providing Services and/or other purposes stated in this Privacy Notice, as well as to transfer your personal information abroad.
            De-identified and Aggregated Information. We may use personal information and other information about you to create de-identified and/or aggregated information, such as de-identified demographic information, de-identified location information, information about the device from which you access our Services, or other analyses we create.
            Share Content with Friends or Colleagues. Our Services may offer various tools and functionalities. For example, we may allow you to provide information about your friends through our referral services. Our referral services may allow you to forward or share certain content with a friend or colleague, such as an email inviting your friend to use our Services. Please only share with us contact information of people with whom you have a relationship (e.g., relative, friend neighbor, or co-worker).
            Business Purposes. We may collect your personal information in accordance with the laws based on the reasons stated under Articles 5 and 6 of the Law and within the scope of fulfilling our obligations, carrying out the business process and/or  creating of a common database with our shareholder(s), as necessary to process personal information (including but not limited to sensitive personal information) of the parties to an agreement. We will process this personal information provided that it is directly related to setting up of an agreement or its performance and it is necessary to process personal information (including but not limited to sensitive personal information) for our legitimate interests, without damaging your fundamental rights and freedoms.
            
            <Heading size="1" sx={{ mb: '5px' }}>HOW WE DISCLOSE YOUR INFORMATION</Heading>
            We disclose your information to third parties for a variety of business purposes, including to provide our Services, to protect us or others, or in the event of a major business transaction such as a merger, sale, or asset transfer, as described below. 
            Disclosures to Provide our Services
            The categories of third parties with whom we may share your information are described below. 
            Service Providers. We may share your personal information with our third-party service providers who use that information to help us provide our Services. This includes service providers that provide us with IT support, hosting, payment processing, customer service, and related services.



            Business Partners. We may share your personal information with business partners to provide you with a product or service you have requested. We may also share your personal information to business partners with whom we jointly offer products or services.
            Advertising Partners. We may share your personal information with third-party advertising partners. These third-party advertising partners may set Technologies and other tracking tools on our Services to collect information regarding your activities and your device (e.g., your IP address, cookie identifiers, page(s) visited, location, time of day). These advertising partners may use this information (and similar information collected from other services) for purposes of delivering personalized advertisements to you when you visit digital properties within their networks. This practice is commonly referred to as “interest-based advertising” or “personalized advertising.”
            List of Recipients


            Disclosures to Protect Us or Others
            We may access, preserve, and disclose any information we store associated with you to external parties if we, in good faith, believe doing so is required or appropriate to: comply with law enforcement or national security requests and legal process, such as a court order or subpoena; protect your, our, or others’ rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual illegal activity.
            Disclosure in the Event of Merger, Sale, or Other Asset Transfers
            If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, purchase or sale of assets, or transition of service to another provider, your information may be sold or transferred as part of such a transaction, as permitted by law and/or contract.
            
            <Heading size="1" sx={{ mb: '5px' }}>YOUR PRIVACY CHOICES AND RIGHTS</Heading>
            Your Privacy Choices. The privacy choices you may have about your personal information are determined by applicable law and are described below. 
            Email and Telephone Communications. If you receive an unwanted email from us, you can use the unsubscribe link found at the bottom of the email to opt out of receiving future emails. Note that you will continue to receive transaction-related emails regarding products or Services you have requested. We may also send you certain non-promotional communications regarding us and our Services, and you will not be able to opt out of those communications (e.g., communications regarding our Services or updates to our Terms or this Privacy Notice). 
            We process requests to be placed on do-not-mail, do-not-phone, and do-not-contact lists as required by applicable law.
            Text Messages. If we send you a text message, you may opt out of receiving text messages from us by following the instructions in the text message you have received from us or by otherwise contacting us.
            Mobile Devices. We may send you push notifications through our mobile application. You may opt out from receiving these push notifications by changing the settings on your mobile device. With your consent, we may also collect precise location-based information via our mobile application. You may opt out of this collection by changing the settings on your mobile device.
            “Do Not Track.” Do Not Track (“DNT”) is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers.
            Cookies and Interest-Based Advertising. You may stop or restrict the placement of Technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, our Services may not work properly. Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt-out of personalized advertisements on some mobile applications by following the instructions for Android, iOS and others.
            The online advertising industry also provides websites from which you may opt out of receiving targeted ads from data partners and other advertising partners that participate in self-regulatory programs. You can access these and learn more about targeted advertising and consumer choice and privacy by visiting the Network Advertising Initiative, the Digital Advertising Alliance, the European Digital Advertising Alliance, and the Digital Advertising Alliance of Canada.  
            Please note you must separately opt out in each browser and on each device. 
            Your Privacy Rights. In accordance with applicable law, you may have the right to:
            Access Personal Information about you, including: (i) confirming whether we are processing your personal information; (ii) obtaining access to or a copy of your personal information; 
            Request Correction of your personal information where it is inaccurate, incomplete or outdated. In some cases, we may provide self-service tools that enable you to update your personal information;
            Request Deletion, Anonymization or Blocking of your personal information when processing is based on your consent or when processing is unnecessary, excessive or noncompliant; 
            Request Restriction of or Object to our processing of your personal information when processing is noncompliant; 
            Withdraw your Consent to our processing of your personal information. If you refrain from providing personal information or withdraw your consent to processing, some features of our Service may not be available;
            Request data portability and receive an electronic copy of personal information that you have provided to us;
            Be informed about third parties with which your personal information has been shared; and
            Request the review of decisions taken exclusively based on automated processing if that could affect data subject rights.
            If you would like to exercise any of these rights, please contact us as set forth in “Contact Us” below. We will process such requests in accordance with applicable laws.
            
            <Heading size="1" sx={{ mb: '5px' }}>SECURITY OF YOUR INFORMATION</Heading>
            We take steps to ensure that your information is treated securely and in accordance with this Privacy Notice. The files and records containing your personal information will be kept in our offices and/or on our servers or those of our service providers and only those employees that require it for the purposes of their duties will have access to this file. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any information you provide to us. We have taken appropriate safeguards to require that your personal information will remain protected and require our third-party service providers and partners to have appropriate safeguards as well. To the fullest extent permitted by applicable law, we do not accept liability for unauthorized disclosure.
            By using our Services or providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Services. If we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on our Services, by mail or by sending an email to you.
            In addition, we determine and implement systematic, clearly defined, manageable and sustainable policies and procedures for the security of your sensitive personal information.
            Within the scope of your sensitive personal information stored in our electronic media or accessible in these environments; 
            (a)	We protect your data using cryptographic methods,
            (b)	We keep cryptographic keys in secure and different environments,
            (c)	We securely log transaction records of all transactions performed on your data,
            (d)	We continuously monitor the security updates of the environments where your data is located, regularly conducts necessary security tests and records test results,
            (e)	In cases where your data is accessed via software, we fulfill the user authorizations of this software and regularly perform the security tests of these software and record the test results in question.
            (f)	We provide at least a two-step authentication system if remote access to your data is required.
            We prevent unauthorized entry and exit in order to ensure the physical security of these environments by taking adequate safe precautions and routinely inspecting your personal information processed, stored and / or accessible in our physical environments.
            
            <Heading size="1" sx={{ mb: '5px' }}>INTERNATIONAL DATA TRANSFERS </Heading>
            All information processed by us may be transferred, processed, and stored anywhere in the world, including, but not limited to, the United States or other countries, which may have data protection laws that are different from the laws where you live. We endeavor to safeguard your information consistent with the requirements of applicable laws.
            The files containing your information will be on our servers and those of our service providers and will be accessible to persons that require it for the purposes of their duties. Information may be accessible to the courts and the law enforcement and national security authorities of the United States. To obtain more information about our policies and practices with respect to service providers outside Canada, please contact us as set forth below.
            For Australian users, except in some cases where we may rely on an exception under the Privacy Act, we will take reasonable steps to ensure that such overseas recipients do not breach the Australian Privacy Principles in the Privacy Act in relation to such information.
            While transferring your personal information internationally, we will comply with the applicable requirements governing processing of your personal information in a specific location – for example, your country of residence.
            Such transfers shall be carried out in accordance with applicable legal provisions and by obtaining your explicit consent in any way.
            When transferring your sensitive personal information;
            If your data is transmitted via e-mail, it is transferred encrypted with a corporate e-mail address,
            If the portable memory needs to be transferred via media such as CDs and DVDs, it is encrypted with cryptographic methods and the cryptographic key is kept in a different environment,
            If transfer is made between servers in different physical environments, data transfer is performed by establishing VPN between servers, and
            Even if the data is required to be transferred through paper medium, necessary precautions are taken against risks such as theft, loss or being seen by unauthorized persons of confidential information and / or documents containing your personal information, and the document is sent in the category of "classified documents".
            
            <Heading size="1" sx={{ mb: '5px' }}>RETENTION OF PERSONAL INFORMATION </Heading>
            We store the personal information we collect as described in this Privacy Notice for as long as you use our Services or as necessary to fulfill the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes, enforce our agreements, and comply with applicable laws.  
            
            <Heading size="1" sx={{ mb: '5px' }}>SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS</Heading>
            This Supplemental California Privacy Notice only applies to our processing of personal information that is subject to the California Consumer Privacy Act of 2018 (“CCPA”). The CCPA provides California residents with the right to know what categories of personal information Modulz has collected about them and whether Modulz disclosed that personal information for a business purpose (e.g., to a service provider) in the preceding 12 months. California residents can find this information below:


            The categories of sources from which we collect personal information and our business and commercial purposes for using personal information are set forth in “Personal Information We Collect” and “How We Use Your Personal Information” above, respectively. 
            “Sales” of Personal Information under the CCPA
            For purposes of the CCPA, we do not “sell” personal information, nor do we have actual knowledge of any “sale” of personal  information of minors under 16 years of age.
            Opt-out of “Sales.  California residents may opt-out of the “sale” of their personal information by contacting us as set forth in “Contact Us” below.
            Additional Privacy Rights for California Residents
            Non-Discrimination. California residents have the right not to receive discriminatory treatment by us for the exercise of their rights conferred by the CCPA. 
            Authorized Agent. Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child. To designate an authorized agent, please contact us as set forth in “Contact Us” below and provide written authorization signed by you or your designated agent.
            Verification. To protect your privacy, we will take steps the following steps to verify your identity before fulfilling your request. When you make a request,  we will ask you to provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative, which may include asking you to answer questions regarding your account and use of our Services.
            If you are a California resident and would like to exercise any of your rights under the CCPA, please contact us as set forth in “Contact Us” below. We will process such requests in accordance with applicable laws. 
            Accessibility. This Privacy Notice uses industry-standard technologies and was developed in line with the World Wide Web Consortium’s Web Content Accessibility Guidelines, version 2.1. If you wish to print this policy, please do so from your web browser or by saving the page as a PDF. 
            California Shine the Light. The California “Shine the Light” law permits users who are California residents to request and obtain from us once a year, free of charge, a list of the third parties to whom we have disclosed their personal information (if any) for their direct marketing purposes in the prior calendar year, as well as the type of personal information disclosed to those parties.
            Right for minors to remove posted content. Where required by law, California residents under the age of 18 may request to have their posted content or information removed from the publicly-viewable portions of the Services by contacting us directly as set forth in Contact Us below.
            
            <Heading size="1" sx={{ mb: '5px' }}>SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS</Heading>
            If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Information to third parties who intend to license or sell that Personal Information. You can exercise this right by contacting us at [support email] with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your account. Please note that we do not currently sell your Personal Information as sales are defined in Nevada Revised Statutes Chapter 603A. If you have any questions, please contact us as set forth below.

            <Heading size="1" sx={{ mb: '5px' }}>CHILDREN’S INFORMATION</Heading>
            The Services are not directed to children under 13 (or other age as required by local law), and we do not knowingly collect personal information from children.

            In Australia, if a user indicates they are under 15 and we are required to obtain the user’s consent (for example, for the collection of sensitive information), we will seek consent from the user’s parent or legal guardian.

            If you are a parent or guardian and believe your child has uploaded personal information to our site without your consent, you may contact us as described in “Contact Us” below. If we become aware that a child has provided us with personal information in violation of applicable law, we will delete any personal information we have collected, unless we have a legal obligation to keep it, and terminate the child’s account.
            
            <Heading size="1" sx={{ mb: '5px' }}>OTHER PROVISIONS</Heading>
            Third-Party Websites/Applications. The Services may contain links to other websites/applications and other websites/applications may reference or link to our Services. These third-party services are not controlled by us. We encourage our users to read the privacy policies of each website and application with which they interact. We do not endorse, screen or approve, and are not responsible for, the privacy practices or content of such other websites or applications. Providing personal information to third-party websites or applications is at your own risk. 
            Supervisory Authority. If you are located in the European Economic Area, Switzerland, the United Kingdom or Brazil, you have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable law.  If you are based in Australia and you are not satisfied with how we have handled your data, you may wish to contact the Office of the Australian Information Commissioner.
            Changes to our Privacy Notice. We may revise this Privacy Notice from time to time in our sole discretion. If there are any material changes to this Privacy Notice, we will notify you as required by applicable law. You understand and agree that you will be deemed to have accepted the updated Privacy Notice if you continue to use our Services after the new Privacy Notice takes effect.
            
            <Heading size="1" sx={{ mb: '5px' }} id="contact">Contact us</Heading>
            <Text as="p" size={3} sx={{ lineHeight: '21px', mb: 15 }}>If you have any questions about our privacy practices or this Privacy Notice, or to exercise your rights as detailed in this Privacy Notice, please contact us at:</Text>
            <address style={{ fontStyle: 'initial' }}>
              <Text as="p" size={3} sx={{ lineHeight: '21px' }}>Modulz, Inc</Text>
              <Text as="p" size={3} sx={{ lineHeight: '21px' }}>Attn: Colm Tuite</Text>
              <Text as="p" size={3} sx={{ lineHeight: '21px' }}>600 N. Broad Street</Text>
              <Text as="p" size={3} sx={{ lineHeight: '21px' }}>Suite 5 #3495</Text>
              <Text as="p" size={3} sx={{ lineHeight: '21px' }}>Middletown, DE 19709</Text>
            </address>
        </Container>
      </Box>
    </Box>
  );
};

export default Privacy;
