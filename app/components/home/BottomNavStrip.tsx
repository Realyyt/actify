import Link from 'next/link';

export default function BottomNavStrip() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Our Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">How We Deliver Impact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/capabilities#tqla" className="group p-8 border border-gray-200 hover:border-gray-400 transition-colors">
            <div className="text-5xl font-light text-gray-300 mb-4 group-hover:text-gray-900 transition-colors">01</div>
            <h3 className="text-xl font-light text-gray-900 mb-2">Leadership & Responsibility</h3>
            <p className="text-gray-500 text-sm">Building local capacity through strong leadership.</p>
          </Link>
          <Link href="/capabilities#aid-to-trade" className="group p-8 border border-gray-200 hover:border-gray-400 transition-colors">
            <div className="text-5xl font-light text-gray-300 mb-4 group-hover:text-gray-900 transition-colors">02</div>
            <h3 className="text-xl font-light text-gray-900 mb-2">Aid-to-Trade Paradigm</h3>
            <p className="text-gray-500 text-sm">Transforming charity into sustainable commerce.</p>
          </Link>
          <Link href="/capabilities#constant-optimization" className="group p-8 border border-gray-200 hover:border-gray-400 transition-colors">
            <div className="text-5xl font-light text-gray-300 mb-4 group-hover:text-gray-900 transition-colors">03</div>
            <h3 className="text-xl font-light text-gray-900 mb-2">Constant Optimization</h3>
            <p className="text-gray-500 text-sm">Iterative improvement for lasting change.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}