
import { CheckCircle, Users, Award, Clock } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Our skilled developers and designers work together to create exceptional digital experiences."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assured",
      description: "We maintain the highest standards in code quality, design, and user experience."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on time, every time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About WebCraft
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a passionate team of web developers and designers dedicated to creating 
              beautiful, functional websites that help businesses thrive in the digital world. 
              With over 5 years of experience, we've helped hundreds of companies establish 
              their online presence.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach combines cutting-edge technology with timeless design principles 
              to deliver websites that not only look amazing but also perform exceptionally well.
            </p>
            
            <div className="space-y-4">
              {["Modern, responsive design", "SEO optimization", "Fast loading speeds", "Ongoing support"].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
