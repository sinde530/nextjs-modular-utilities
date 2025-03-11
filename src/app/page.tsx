// import { CardDemo } from '@/components/examples/card-demo';
// import { InputDemo } from '@/components/examples/input-demo';
// import { ToggleDemo } from '@/components/examples/toggle-demo';
// import { AlertDemo } from '@/components/examples/alert-demo';
// import { Button } from '@/components/ui/button';

export default function HomeScreen() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Next.js Boilerplate</h1>
      <p className="text-muted-foreground mb-8">
        A comprehensive Next.js boilerplate with responsive components
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Inputs</h2>
            {/* <InputDemo /> */}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Toggles</h2>
            {/* <ToggleDemo /> */}
          </section>
        </div>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Cards</h2>
            {/* <CardDemo /> */}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Alerts</h2>
            {/* <AlertDemo /> */}
          </section>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">API Examples</h2>
        <div className="flex flex-wrap gap-4">
          {/* <Button asChild> */}
          <a href="/api-examples">View API Examples</a>
          {/* </Button> */}
        </div>
      </section>
    </div>
  );
}
