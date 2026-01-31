import { Link } from 'react-router-dom'
import { menu } from 'src/utils/menu'

const MobileMenu = ({ visible }) => {
    return visible ?
        (
            <div className='block lg:hidden absolute w-full bg-hero top-11 right-0 shadow-accent-strong/65 shadow-2xl rounded-b-2xl z-20'>
                <ul className='flex flex-col items-start text-white text-base text-right p-4 gap-y-6'>
                    {
                        menu.map((item) => (
                            <li key={item.id} className='text-left hover:bg-accent-strong rounded-2xl w-full px-4 py-2'>
                                <Link to={item.to}>
                                    <p className='font-medium flex gap-x-2'>
                                        <i className={item.icon} />
                                        {item.name}
                                    </p>
                                    <p className='font-light text-sm'>
                                        {
                                            item.description
                                        }
                                    </p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        ) : null
}

export default MobileMenu