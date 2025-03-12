'use client';

import Input from '@/app/ui/Input';
import Label from '@/app/ui/Label';
import { Mail, Search, Lock, EyeOff, Eye } from 'lucide-react';
import { useState } from 'react';

export default function InputDemo() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <Label>Default Input</Label>
        <Input id="default" type="text" placeholder="Enter Text Here..." />
      </div>

      <div className="flex flex-col space-y-2">
        <Label>Search Input</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-textSecondary" />
          <Input id="search" type="text" placeholder="Search..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <Label>Email Input</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-textSecondary" />
          <Input id="email" type="email" placeholder="Search..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <Label>Password Input</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-textSecondary" />
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            className="pl-10"
          />
          <div
            className="absolute right-0 top-0 h-full flex items-center px-[2px]"
            onClick={() => setShowPassword(!showPassword)}
          >
            <div className="hover:bg-borderColor hover:rounded-md cursor-pointer flex p-2">
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <Label>Disabled Input</Label>
        <Input
          id="disabled"
          placeholder="This Input Is Disabled"
          disabled
          className="disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
