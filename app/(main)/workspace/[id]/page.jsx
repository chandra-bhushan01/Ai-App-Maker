import ChatView from '@/components/custom/ChatView'
import CodeView from '@/components/custom/CodeView'
import { FileVideo } from 'lucide-react'
import React from 'react'

const workspace = () => {
  return (
    <div className="px-3 h-full ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <ChatView />

        <div className="col-span-3">
          <CodeView />
        </div>
      </div>
    </div>
  );
}

export default workspace