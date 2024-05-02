import React from 'react';

const Registro = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from--500">
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 shadow-lg sha'>
            <h1 className='text-5xl font-semibold mb-4'>Registro</h1>
            <p className='font-medium text-lg text-gray-500'>Por favor ingresa tus detalles</p>
            <div className='mt-8'>
                <div className="mt-4">
                    <label className='text-lg font-medium' htmlFor="email">Email</label>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Ingresa tu Email' type="email" name="email" id="email"/>
                </div>
                <div className="mt-4">
                    <label className='text-lg font-medium' htmlFor="password">Contraseña</label>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Ingresa tu Contraseña' type="password" name="password" id="password"/>
                </div>
                <div className="mt-4">
                    <label className='text-lg font-medium' htmlFor="gender">Sexo</label>
                    <select className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' name="gender" id="gender">
                        <option value="">Selecciona tu sexo</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label className='text-lg font-medium'>¿Qué eres?</label>
                    <div className="flex items-center mt-2">
                        <input type="radio" id="mentee" name="role" value="mentee"/>
                        <label className='ml-2 mr-6 font-medium text-base' htmlFor="mentee">Mentee</label>
                        <input type="radio" id="mentor" name="role" value="mentor"/>
                        <label className='font-medium text-base' htmlFor="mentor">Mentor</label>
                    </div>
                </div>
                <div className="mt-4">
                    <label className='text-lg font-medium' htmlFor="birthdate">Fecha de Nacimiento</label>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' type="date" name="birthdate" id="birthdate"/>
                </div>
                <div className='mt-8'>
                    <button className='w-full bg-violet-500 text-white text-lg font-bold py-3 rounded-xl active:scale-95 active:duration-150 transition-all hover:scale-[1.01] ease-out'>Registrarse</button>
                    <button className='flex items-center justify-center gap-2 mt-4 w-full text-black text-lg py-3 rounded-xl active:scale-95 active:duration-150 transition-all hover:scale-[1.01] ease-out '>Registrarse con Google</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Registro;
