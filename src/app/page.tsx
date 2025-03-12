// import { CardDemo } from '@/components/examples/card-demo';
// import { InputDemo } from '@/components/examples/input-demo';
// import { ToggleDemo } from '@/components/examples/toggle-demo';
// import { AlertDemo } from '@/components/examples/alert-demo';
// import { Button } from '@/components/ui/button';

import InputDemo from './components/Input';

export default function HomeScreen() {
  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-[1400px] px-4">
        <h1 className="text-3xl font-bold mb-6">Next.js Boilerplate</h1>
        <p className="text-textSecondary mb-8">
          A comprehensive Next.js boilerplate with responsive components
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section className="space-y-4">
              <p className="text-2xl font-semibold">Inputs</p>
              <InputDemo />
            </section>

            <section className="space-y-4">
              <p className="text-2xl font-semibold">Toggles</p>
              {/* <ToggleDemo /> */}
            </section>
          </div>

          <div className="space-y-6">
            <section className="space-y-4">
              <p className="text-2xl font-semibold">Cards</p>
              {/* <CardDemo /> */}
            </section>

            <section className="space-y-4">
              <p className="text-2xl font-semibold">Alerts</p>
              {/* <AlertDemo /> */}
            </section>
          </div>
        </div>

        <section className="mt-12">
          <p className="text-2xl font-semibold mb-4">API Examples</p>
          <div className="flex flex-wrap gap-4">
            {/* <Button asChild> */}
            <a href="/api-examples">View API Examples</a>
            {/* </Button> */}
          </div>
        </section>
      </div>
    </div>
  );
}
