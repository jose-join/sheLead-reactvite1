import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-2">Contáctanos</h3>
          <p className="text-gray-300">Dirección: 123 Calle Principal, Ciudad</p>
          <p className="text-gray-300">Teléfono: +123 456 7890</p>
          <p className="text-gray-300">Correo electrónico: info@example.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Redes Sociales</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.89 3.604 8.932 8.291 9.698-.1-.89-.19-2.26.04-3.245.21-1.07 1.362-6.812 1.362-6.812s-.33-.673-.33-1.673c0-1.565.91-2.743 2.04-2.743 1.018 0 1.515.765 1.515 1.68 0 1.027-.654 2.557-.993 3.99-.287 1.226.608 2.22 1.816 2.22 2.18 0 3.868-2.295 3.868-5.595 0-2.92-2.1-4.96-5.108-4.96-3.473 0-5.505 2.588-5.505 5.268 0 1.042.347 1.755.908 2.293.1.12.11.23.083.36-.087.38-.292 1.194-.333 1.362-.053.21-.17.264-.394.16-1.367-.674-2.223-2.325-2.223-3.98 0-3.17 2.52-6.116 7.242-6.116 3.81 0 6.482 2.746 6.482 5.682 0 3.38-1.894 6.12-4.733 6.12-.924 0-1.793-.48-2.09-1.052 0 0-.445 1.703-.55 2.11-.204.947-.747 2.118-1.116 2.832.84.26 1.732.404 2.658.404 5.522 0 9.984-4.509 9.984-10.05C22 6.477 17.523 2 12 2z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.354 2.146c-.78-.78-2.048-.78-2.828 0l-12 12c-.78.78-.78 2.048 0 2.828l6 6c.39.39.902.586 1.414.586s1.024-.196 1.414-.586l12-12c.78-.78.78-2.048 0-2.828l-6-6zM9.414 19l-4.586-4.586 9-9 4.586 4.586-9 9z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.485 2 2 6.485 2 12c0 5.514 4.485 10 10 10 5.514 0 10-4.486 10-10 0-5.515-4.486-10-10-10zM6.047 18.537h-1.01v-6.75h1.01v6.75zm2.68 0h-1.01v-6.75h1.01v6.75zm3.35-.41c-.167 0-.303-.136-.303-.304v-6.044c0-.167.136-.303.303-.303h1.843c.166 0 .302.136.302.303v6.044c0 .168-.136.304-.302.304h-1.843zm3.352 0h-1.011v-3.412h1.01l.001 3.412zm4.281 0h-1.01v-3.412h1.01v3.412zm0-4.23h-1.01v-1.014c0-.168.137-.304.304-.304h.849c.168 0 .304.136.304.304v1.014h-1.011v-1.014c0-.168.136-.304.303-.304h.849c.168 0 .304.136.304.304v1.014zm-10.162-6.65c2.756 0 4.978 2.222 4.978 4.978 0 2.755-2.222 4.978-4.978 4.978-2.755 0-4.978-2.222-4.978-4.978 0-2.756 2.222-4.978 4.978-4.978zm0 1.52c-2.064 0-3.735 1.672-3.735 3.735s1.672 3.734 3.735 3.734 3.735-1.671 3.735-3.734c0-2.063-1.671-3.735-3.735-3.735z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
