import React from 'react'
import logo from '../assets/logo.svg.png'

export default function Footer() {
  const footerData = [
    {
      title: 'Company',
      links: [
        'About Us',
        'Delivery Information',
        'Privacy Policy',
        'Terms & Conditions',
        'Contact Us',
        'Support Center',
        'Careers'
      ]
    },
    {
      title: 'Account',
      links: [
        'Sign In',
        'View Cart',
        'My Wishlist',
        'Track My Order',
        'Help Ticket',
        'Shipping Details',
        'Compare products'
      ]
    },
    {
      title: 'Corporate',
      links: [
        'Become a Vendor',
        'Affiliate Program',
        'Farm Business',
        'Farm Careers',
        'Our Suppliers',
        'Accessibility',
        'Promotions'
      ]
    },
    {
      title: 'Popular',
      links: [
        'Milk & Flavoured Milk',
        'Butter and Margarine',
        'Eggs Substitutes',
        'Marmalades',
        'Sour Cream and Dips',
        'Tea & Kombucha',
        'Cheese'
      ]
    }
  ];

  const linkContact = [
    {name: 'instagram'},
    {name: 'youtube'},
    {name: 'twitter'},
    {name: 'facebook'},
    {name: 'pinterest-alt'}
  ]


  return (
     
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <img src={logo} alt="" />
            <h2 className="text-lg font-semibold mb-4">How it is modern</h2>
            <p className="mb-2">Awesome grocery store website template</p>
            <address className="not-italic mb-2">
              537 LV Complex Ave<br />
              unclemet Neck, Utah 53127 United States
            </address>
            <p className="mb-2">Call Us: (+91) - 540-025-124553</p>
            <p className="mb-2">Email: sales@Nest.com</p>
            <p>Hours: 10:00 - 18:00, Mon - Sat</p>
          </div>

          {/* Newsletter or other content can go here */}
          <div className="md:col-span-2">
            {/* App install section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Install App</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black cursor-pointer hover:bg-gray-700 transition-[0.3s] text-white px-4 py-2 rounded flex items-center">
                  <span className="mr-2">Appstore</span>
                </button>
                <button className="bg-black cursor-pointer hover:bg-gray-700 transition-[0.3s] text-white px-4 py-2 rounded flex items-center">
                  <span className="mr-2">Google Play</span>
                </button>
              </div>
            </div>

            {/* Payment methods */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Secured Payment Gateway:</h3>
              <div className="flex flex-wrap gap-4">
                {/* Payment icons would go here */}
                <div className="w-12 h-8">
                  <img src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png' alt="" />
                </div>
                <div className="w-12 h-8">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="" />
                </div>
                <div className="w-12 h-8">
                  <img src="https://brandlogos.net/wp-content/uploads/2012/10/maestro-card-vector-logo.png" alt="" />
                </div>
                <div className="w-12 h-8">
                  <img src="https://api.logobank.uz/media/logos_png/Uzcard-01.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-green-600 transition-colors hover:translate-x-2">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2022 Nest - HTML Ecommerce Template. All rights reserved</p>
            </div>

            <div className="mt-8 text-center">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <p className="mb-4">Up to 12% discount on your first subscribe</p>
              <div className="flex justify-center space-x-4">
                {/* Social icons would go here */}
                {
                  linkContact.map((item, index) => {
                    return(
                      <div key={index} className="w-10 h-10 bg-green-600 rounded-3xl flex items-center justify-center cursor-pointer hover:scale-120 transition-[0.3s]">
                        <a href="" className='h-full w-full flex items-center justify-center'>
                          <box-icon name={item.name} type='logo' color='white'></box-icon>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="font-semibold">1900 - 6666</p>
                <p className="text-sm">Working 8:00 - 22:00</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">1900 - 8888</p>
                <p className="text-sm">24/7 Support Center</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
