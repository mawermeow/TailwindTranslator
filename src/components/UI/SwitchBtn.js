import React from 'react';
import { motion } from 'framer-motion';

const SwitchBtn = ({
                       value, onChange,
                       trackClass="w-14 h-8",
                       trueClass="bg-blue-500",
                       falseClass="bg-black",
                       thumbClass="bg-white",
                   }) => {
    const toggleSwitch = () => {
        onChange(!value);
    };

    return (
        <div className="flex">
            <motion.button
                className={`relative rounded-full flex items-center justify-start p-1 transition-colors ${trackClass} ${value ? trueClass : falseClass}`}
                onClick={toggleSwitch}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className={`w-6 h-6 rounded-full shadow-md ${thumbClass}`}
                    variants={{
                        off: {
                            x: 0,
                        },
                        on: {
                            x: '100%',
                        },
                    }}
                    initial={value ? 'on' : 'off'}
                    animate={value ? 'on' : 'off'}
                ></motion.div>
            </motion.button>
        </div>
    );
};

export default SwitchBtn;
