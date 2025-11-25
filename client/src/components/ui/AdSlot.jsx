import React from 'react';
import { cn } from '../../lib/utils';

const AdSlot = ({ position, className }) => {
    return (
        <div className={cn('w-full flex justify-center my-8', className)}>
            <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 w-full max-w-[728px] h-[90px] flex items-center justify-center text-gray-400 text-sm">
                <span className="font-mono">AdSlot: {position}</span>
            </div>
        </div>
    );
};

export default AdSlot;
