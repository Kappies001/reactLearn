import React from 'react'

export default function Card() {
  return (
    <div className="card pt-3 pb-8 px-8 lg:px-20">
        <div className="card-innerlayer flex lg:flex-row flex-col gap-3">
            <div className="flex-1 flex lg:flex-row flex-col gap-3">
                <div className="flex-1 p-6 rounded-lg bg-gray-100">
                    <div className="card-title pb-3">Pace of innovation</div>
                    <div className="card-content pb-12">
                        Ternary releases major functionality at agile (weekly) pace. The incumbents are slow.
                    </div>
                    <img alt="card1" src="./assets/Images/card1.webp" width="100%" />
                </div>
                <div className="flex-1 py-6 rounded-lg bg-gray-100">
                    <div className="card-title pb-3 px-6">Pricing</div>
                    <div className="card-content pb-12 px-6">
                        We charge a flat fee with no overrages; We innovated this pricing model.
                    </div>
                    <img alt="card2" src="./assets/Images/card2.webp" width="100%" />
                </div>
            </div>
            <div className="flex-1 p-6 rounded-lg bg-gray-100">
                <div className="card-title pb-3">Customers</div>
                <div className="card-content pb-12">
                    We are the only startup in the space that has large Enterprise customers and giants MPSs. No one has been able to compete against the incumbents till now.
                </div>
                <img alt="card3" src="./assets/Images/card3.webp" width="100%" />
            </div>
        </div>
    </div>
  )
}
