import { LoadingSpinner } from "@/components/ui/loading";

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <LoadingSpinner size="lg" label="Loading" />
    </main>
  );
}
