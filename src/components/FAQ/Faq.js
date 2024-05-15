import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';
function Faq() {
    return (
        <Container fluid className=' faq-container' data-aos="fade-in" data-aos-delay="1200">
            <h1 className='mx-4 faq  py-4'>FAQ</h1>
            <Accordion className='accordition w-100 container-fluid px-0 mx-0 flush'>
                <Accordion.Item eventKey="0" className='accord-item'>
                    <Accordion.Header className='accordion-button1'>What are your core services as a Web Designer firm?</Accordion.Header>
                    <Accordion.Body>
                        At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software. <br /> <br />

                        However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites.<br /><br />
                        Today, our projects encompass a wide range, from building new products and defining brands to revitalizing existing mobile apps, websites, and enterprise software. We specialize in crafting digital products that wholeheartedly embody the brand's personality and deliver delightful experiences to your customers.
                        <br /><br />
                        Our team handles every aspect required to bring a digital product to life. This includes user research, product strategy, branding, user interface and experience design, usability testing, prototyping, web design, and development.
                        <br /><br />
                        Furthermore, we boast an in-house content production studio that provides creative direction, 2D/3D design, illustration and iconography, motion design, animation, sound design, photo/video, and copywriting services.
                        <br /><br />
                        For web projects, we integrate considerations for SEO into our process to ensure that our client's websites are optimized for search engines; however, SEO is not offered as a standalone service.<br /><br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='accord-item'>
                    <Accordion.Header className='accordion-button1'>What separates Byte Burst from other branding and we design agencies?</Accordion.Header>
                    <Accordion.Body>
                        In a saturated market of excellent UX design and branding agencies, it's challenging to stand out. At Clay, we believe our client's success is intertwined with our own. We forge enduring partnerships based on trust and mutual growth, going beyond world-class services.
                        <br /><br />
                        When you choose us, you collaborate directly with our dedicated team, who genuinely care about your success. Our cofounders oversee every project, while a design director leads the way, ensuring thorough design reviews and involvement in project details.
                        <br /><br />
                        Communication and transparency drive all our interactions, guaranteeing a premium client experience from start to finish. Our agility stems from working with startups, and our refined project management approach comes from enterprise experience.
                        <br /><br />
                        Unlike traditional design firms, we integrate branding and product expertise in one place, boasting cross-disciplinary teams for each project. This ensures your app or website represents your brand effectively while delivering an unforgettable user experience.
                        <br /><br />
                        Lastly, we specialize in creating scalable designs that support your long-term business goals. Our portfolio showcases websites and products untouched for over five years, proving our future-proof capabilities.<br /><br />

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='accord-item'>
                    <Accordion.Header className='accordion-button1'>What separates Byte Burst from other branding and we design agencies?</Accordion.Header>
                    <Accordion.Body>
                        In a saturated market of excellent UX design and branding agencies, it's challenging to stand out. At Byte Burst, we believe our client's success is intertwined with our own. We forge enduring partnerships based on trust and mutual growth, going beyond world-class services.
                        <br /><br />
                        When you choose us, you collaborate directly with our dedicated team, who genuinely care about your success. Our cofounders oversee every project, while a design director leads the way, ensuring thorough design reviews and involvement in project details.
                        <br /><br />
                        Communication and transparency drive all our interactions, guaranteeing a premium client experience from start to finish. Our agility stems from working with startups, and our refined project management approach comes from enterprise experience.
                        <br /><br />
                        Unlike traditional design firms, we integrate branding and product expertise in one place, boasting cross-disciplinary teams for each project. This ensures your app or website represents your brand effectively while delivering an unforgettable user experience.
                        <br /><br />
                        Lastly, we specialize in creating scalable designs that support your long-term business goals. Our portfolio showcases websites and products untouched for over five years, proving our future-proof capabilities.<br /><br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='accord-item'>
                    <Accordion.Header className='accordion-button1'>Do you work with clients in different timezones?</Accordion.Header>
                    <Accordion.Body>
                        We have extensive experience working with clients in various time zones. Based in San Francisco, we operate as a remote-first company with team members across the United States, Europe, and South-East Asia. This global presence allows us to serve clients worldwide, regardless of location.
                        <br /><br />
                        Over the past 12 years, we have perfected our remote collaboration model, enabling seamless work with clients from Saudi Arabia, China, Australia, Germany, the UK, and many other countries. We understand the challenges of different time zones and have implemented effective communication and project management strategies to overcome them.
                        <br /><br />
                        Our team excels at coordinating and scheduling meetings to accommodate clients' time preferences and availability across different regions. We prioritize clear and timely communication, leveraging various collaboration tools and platforms to maintain constant connectivity and streamline project workflows.
                        <br /><br />
                        Working with clients across diverse time zones has expanded our agency's capabilities and deepened our understanding of global markets. It has fostered an adaptive and efficient culture within our team, allowing us to consistently deliver exceptional results while respecting and embracing our clients' unique needs and perspectives worldwide. <br /><br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='accord-item'>
                    <Accordion.Header className='accordion-button1'>How much hiring you for a design project cost?</Accordion.Header>
                    <Accordion.Body>
                        At Clay, we understand the importance of flexibility in budget and support for our partners. We offer a blended rate for our services and work with our clients to determine what level of support we can provide based on their budgetary constraints.
                        <br /><br />
                        We offer three engagement models: time & materials, fixed fee, and retainer. Following a series of discovery conversations and project briefings, our team will recommend the most suitable model for your needs. We will then create a customized proposal, including a timeline and estimated cost.
                        <br /><br />
                        We aim to deliver the best possible solutions to our partners, tailored to their specific requirements. Whether it entails a comprehensive range of services or a customized approach that aligns with their financial constraints, we strive to meet their unique needs.<br /><br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='accord-item'>
                    <Accordion.Header>Do you work with startups?</Accordion.Header>
                    <Accordion.Body>
                        Yes, we work with clients of all sizes, from enterprise-level organizations to startups. We are passionate about helping startups bring their ideas to life and achieve their goals through the power of design and technology. Additionally, we possess the expertise to assist in scaling your product or marketing efforts to enter new markets or reach different target audiences.
                        <br /><br />
                        One of our most common scenarios involves preparing SaaS startups to cater to enterprise clients by revamping their brand, product, and marketing site. We have partnered with numerous early-stage companies, including Coinbase, Uber, SendGrid, and MoneyLion, who have emerged as leaders in their respective industries.
                        <br /><br />
                        Conversely, other startups we have collaborated with, such as Earnin, experienced significant success after we redesigned their app, securing over $100M in additional venture funding.
                        <br /><br />
                        If you are a startup seeking to discuss your project needs, we would be delighted to initiate the conversation. To schedule a consultation with our team, please get in touch with us at hey@clay.global. We will work closely with you to comprehend your vision, goals, and budget, ensuring a tailored approach to your project.<br /><br />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}
export default Faq;