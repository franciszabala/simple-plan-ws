module.exports = {
  getAllPlans: function() {
  return Object.keys(plans).map(id => {
    const plan = plans[id];
    return {
      code: plan.code,
      name: plan.name,
      price: plan.price,
      expiry: plan.expiry,
      is_plan: plan.is_plan,
      is_unlimited: plan.is_unlimited,
      size_mb: plan.size_mb,
      "4g":plan["4g"],
      auto_renew: plan.auto_renew,
      terms_url: plan.terms_url,
      info_url: plan.info_url,
      };
    });
  },

  getPlan: function (id) {
    return plans[id];
  }

};


var plans = { "ult_small" :
  {
    "code": "ult_small",
    "name": "Unlimited 1GB",
    "price": 24.9,
    "expiry": 30,
    "is_plan": true,
    "is_unlimited": true,
    "size_mb": 1024,
    "4g": true,
    "auto_renew": true,
    "terms_url": "http://amaysim.com.au/terms-conditions/special-conditions-and-service-description-unlimited-1gb.pdf",
    "info_url": "http://amaysim.com.au/critical-information-summary/critical-info-summary-unl-1gb.pdf"
  },
  "ult_medium" :
  {
    "code": "ult_medium",
    "name": "Unlimited 2GB",
    "price": 29.9,
    "expiry": 30,
    "is_plan": true,
    "is_unlimited": true,
    "size_mb": 2048,
    "4g": true,
    "auto_renew": true,
    "terms_url": "http://amaysim.com.au/terms-conditions/special-conditions-and-service-description-unlimited-2gb.pdf",
    "info_url": "http://amaysim.com.au/critical-information-summary/critical-info-summary-unl-2gb.pdf"
  },
  "ult_large":
  {
    "code": "ult_large",
    "name": "Unlimited 5GB",
    "price": 44.9,
    "expiry": 30,
    "is_plan": true,
    "is_unlimited": true,
    "size_mb": 5120,
    "4g": true,
    "auto_renew": true,
    "terms_url": "http://amaysim.com.au/terms-conditions/special-conditions-and-service-description-unlimited-5gb.pdf",
    "info_url": "http://amaysim.com.au/critical-information-summary/critical-info-summary-unl-5gb.pdf"
  },
  "ult_xlarge" :
  {
    "code": "ult_xlarge",
    "name": "Unlimited 8GB",
    "price": 49.9,
    "expiry": 30,
    "is_plan": true,
    "is_unlimited": true,
    "size_mb": 8192,
    "4g": true,
    "auto_renew": true,
    "terms_url": "http://amaysim.com.au/terms-conditions/special-conditions-and-service-description-unlimited-8gb.pdf",
    "info_url": "http://amaysim.com.au/critical-information-summary/critical-info-summary-unl-8gb.pdf"
  }

  };
