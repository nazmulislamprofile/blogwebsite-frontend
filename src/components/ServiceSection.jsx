import React from 'react';

const ServiceSection = () => {
    // Static data for services
    const services = [
        {
            _id: 1,
            title: "Web Development",
            description: "We create fully responsive, interactive, and dynamic websites that are user-friendly and visually appealing."
        },
        {
            _id: 2,
            title: "Mobile App Development",
            description: "Our mobile app solutions cater to both Android and iOS, offering seamless experiences and functionalities."
        },
        {
            _id: 3,
            title: "UI/UX Design",
            description: "We design intuitive, creative, and user-centric interfaces to improve the user experience of your product."
        },
        {
            _id: 4,
            title: "E-commerce Solutions",
            description: "We offer end-to-end e-commerce services, from building online stores to providing integration with payment gateways."
        },
        {
            _id: 5,
            title: "SEO Optimization",
            description: "Our SEO services help your website rank higher on search engines, driving organic traffic to your site."
        },
        {
            _id: 6,
            title: "E-commerce",
            description: "Our SEO services help your website rank higher on search engines, driving organic traffic to your site."
        }

    ];

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
                {services.map(service => (
                    <div key={service._id} className="col-md-4 text-center mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
