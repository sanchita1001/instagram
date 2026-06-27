import React from 'react'

const Notifications = ({ setNotificationToggle }) => {
    return (
        <>
            <div onClick={() => setNotificationToggle(false)} className="fixed inset-0 z-10"></div>
            <div className="absolute w-96 bg-white rounded drop-shadow-2xl right-8 top-14 border z-20">
                <div className="absolute right-8 -top-2 rotate-45 h-4 w-4 bg-white border-l border-t"></div>

                <div className="flex flex-col w-full overflow-hidden rounded">
                    <div className="p-4 border-b">
                        <h3 className="font-semibold text-base">Notifications</h3>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                        {/* Placeholder for now - will be populated with actual notifications */}
                        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="w-11 h-11 rounded-full bg-gray-200"></div>
                            <div className="flex-1">
                                <p className="text-sm"><span className="font-semibold">username</span> liked your post.</p>
                                <p className="text-xs text-gray-500">1h</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="w-11 h-11 rounded-full bg-gray-200"></div>
                            <div className="flex-1">
                                <p className="text-sm"><span className="font-semibold">anotheruser</span> started following you.</p>
                                <p className="text-xs text-gray-500">2h</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="w-11 h-11 rounded-full bg-gray-200"></div>
                            <div className="flex-1">
                                <p className="text-sm"><span className="font-semibold">someuser</span> commented on your post.</p>
                                <p className="text-xs text-gray-500">5h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications