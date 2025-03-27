import React from 'react';
import { TabsContent } from '@components/navigation-tab';
import { Gamepad2 } from 'lucide-react';

const FunIsland: React.FC = () => {
  return (
    <TabsContent value="fun" className="m-0">
      <div className="py-12 text-center">
        <Gamepad2 className="mx-auto mb-4 h-16 w-16 text-gray-600" />

        <p className="text-gray-400">
          Don't let the monotony of the road steal your joy. Park it, rest up,
          and game your way back to happiness.
        </p>
      </div>
    </TabsContent>
  );
};

export default FunIsland;
