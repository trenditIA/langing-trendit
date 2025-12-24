import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    type?: 'success' | 'error' | 'warning';
    title: string;
    message: string;
    buttonText?: string;
}

export function AlertModal({
    isOpen,
    onClose,
    type = 'success',
    title,
    message,
    buttonText = 'Entendido'
}: AlertModalProps) {
    // Cerrar con ESC
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Bloquear scroll del body
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const iconConfig = {
        success: {
            icon: <CheckCircle2 className="size-12" />,
            color: '#22c55e',
            bgColor: 'rgba(34, 197, 94, 0.1)',
            borderColor: 'rgba(34, 197, 94, 0.2)'
        },
        error: {
            icon: <AlertCircle className="size-12" />,
            color: '#ef4444',
            bgColor: 'rgba(239, 68, 68, 0.1)',
            borderColor: 'rgba(239, 68, 68, 0.2)'
        },
        warning: {
            icon: <AlertCircle className="size-12" />,
            color: '#f59e0b',
            bgColor: 'rgba(245, 158, 11, 0.1)',
            borderColor: 'rgba(245, 158, 11, 0.2)'
        }
    };

    const config = iconConfig[type];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[90%] sm:w-[70%] md:w-[30%] md:min-w-[320px] md:max-w-[500px]
                       max-h-[90vh] overflow-y-auto
                       bg-white rounded-2xl md:rounded-3xl shadow-2xl z-[110] 
                       flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header con botón cerrar */}
                        <div className="flex items-center justify-end px-6 pt-5 pb-2 flex-shrink-0" style={{
                            paddingTop: "15px",
                            marginBottom: "-25px"
                        }}>
                            <button
                                onClick={onClose}
                                className="size-9 sm:size-10 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
                                aria-label="Cerrar"

                            >
                                <X className="size-5 text-neutral-600" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                            <div className="flex flex-col items-center text-center">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                                    className="size-20 rounded-full flex items-center justify-center mb-5"
                                    style={{
                                        background: config.bgColor,
                                        border: `2px solid ${config.borderColor}`,
                                        color: config.color
                                    }}
                                >
                                    {config.icon}
                                </motion.div>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-[22px] sm:text-[24px] md:text-[26px] mb-3"
                                    style={{
                                        color: '#141414',
                                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        fontWeight: 700
                                    }}
                                >
                                    {title}
                                </motion.h2>

                                {/* Message */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[15px] sm:text-[16px] text-neutral-600 mb-6 leading-relaxed max-w-sm mx-auto"
                                    style={{
                                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        fontWeight: 400
                                    }}
                                >
                                    {message}
                                </motion.p>

                                {/* Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    onClick={onClose}
                                    className="w-full sm:w-auto px-8 py-3.5 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
                                    style={{
                                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        fontWeight: 600,
                                        fontSize: '15px'
                                    }}
                                >
                                    {buttonText}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

