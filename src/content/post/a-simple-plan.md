---
publishDate: 2024-05-15T00:00:00Z
title: A Simple Plan
excerpt: Sometimes complicated situations are actually quite simple.  We show how a seemingly difficult business can be modeled in one line. WARNING. This is an advanced article, not suitable for most entrepreneurs.  If in doubt, skip it.
image: ~/assets/images/a-simple-plan.jpg
tags:
  - forecasting
  - fp&a
---

Here’s a situation that seems so complicated most businesses have no idea how to deal with it:

You are pursuing a several sales prospects.  You are keeping track of them in a CRM system and have created a pipeline to track the prospects as they proceed through the pipeline.  Through experience, you’ve come to understand the probability that you will close each prospect based on where they are in the pipeline.  

It is easy to calculate the expected sales amount:  just multiply the size of the deal by the probability of winning it and sum across deals.  But what if you aren’t sure when each deal may close, and you’d also like to understand the range of likely outcomes.   This becomes especially important if you are pursuing a few large customers.

Is this easy, or is this hard?  Let’s try to do this in [Causal](https://causal.app/) and see.

Suppose that we are pursuing six customers:

![customers](~/assets/images/customers.png)

We have already assigned a pipeline stage and size to each prospect.   Through experience, we have come to understand that each stage of the pipeline has a range of times to close and a probability of closing.

![stage](~/assets/images/stage.png)

The F P & A Model then is **one line** in Causal:

![model](~/assets/images/model.png)

![model](~/assets/images/sales.png)

Now we can see the range of likely outcomes.  This can be extended to determine if we might need additional sources of funding.  But that might require another line of code. &#x1F60A;

You many have noticed that the above chart looks a bit strange.  Why is there such a sharp edge at the bottom of the probability chart?  

In fact, it is because there are several errors in the above model.  Also, it would be more interesting to show the sales by month, rather than cumulative sales.

So I’m offering $50 to the first person can model this correctly and defend your work without help on a video call with me.  If you work for an F P & A company or are related to someone who is, you are not eligible.  One attempt per person, so make sure your model is correct before talking to me.  Here are some questions to ask yourself:

- How many random variables are there?
- What is the chance you get a decision from customer three in month five?
- What is the chance you close customer three in month five?

You don’t have to use Causal.  Instead, you could do this for free in [RiskAmp Web](https://web.riskamp.com/about).  Or maybe you want to use another FP & A tool.  You may use any continuous distribution for the time-to-decision for each customer.  Good luck!
