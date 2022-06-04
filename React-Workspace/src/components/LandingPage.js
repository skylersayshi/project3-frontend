/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
const features = [
  {
    name: 'Community Driven',
    description:
      'Post questions, accomplishments, and fitness and nutrition tips',
    icon: GlobeAltIcon,
  },
  {
    name: 'Search Calories by Food',
    description:
      'Instantly search facts about your food',
    icon: ScaleIcon,
  },
  {
    name: 'Find Hit Recipes',
    description:
      'Find new recipes and add your own to a public forum',
    icon: LightningBoltIcon,
  },
  
]

export default function LandingPage() {
  return (
    <div className="py-12 bg-white rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Health Hero
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            An app designed for your best life.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
            <div>
                <Link to="/" >
                <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Look Around
                </button>
                </Link>
            </div>
            
          </dl>
        </div>
      </div>
    </div>
  )
}
