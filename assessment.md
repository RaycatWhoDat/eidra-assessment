# Hello!

Welcome to Eidra's Fullstack Work Test! This document contains the following things:

- Intro to the Work Test
- Technical specifications
- Requirements (Frontend & Backend)
- Provided Resources
- Evaluation Criteria

## Work Test Intro

Eidra is working on setting up a new and exciting restaurant service: Munchies! For all your restaurant needs!
We have a design ready and want you to build a fullstack application with a proxy server and frontend interface so that our users can find the right restaurant for them.

**Time Limit: 2h maximum** ⏰

**Focus:** Build a proxy server with in-memory caching and a frontend interface. You'll demonstrate project bootstrapping, technology selection, architecture decisions, and rapid development skills under realistic time constraints.

**Note:** We're not looking for a pixel-perfect solution. We want to see what you can accomplish in 2 hours, where you make practical trade-offs if needed, and understand your thinking process and decision-making under time constraints. As a senior developer, demonstrating your ability to assess pros and cons while balancing multiple constraints (time, quality, functionality) is crucial.

## Requirements Overview

**Build from scratch:** Create a restaurant discovery application with proxy server and frontend interface in 2 hours.

**Technology Requirements:**
- **In-memory cache:** For storing external API responses with TTL (5-10 minutes)
- **Architecture choice:** Build as separate apps OR single full-stack framework

**Architecture Options:**
- **Separate apps:** Node.js proxy server + separate frontend app
- **Single framework:** Full-stack framework that handles both (Next.js, etc.)

**Your tasks are divided into 3 phases:**

### Phase 1: Backend Development (45 minutes)

**Create a Node.js proxy server with:**
1. **Project bootstrap** - Initialize Node.js project, install dependencies
2. **Proxy endpoints** - Route frontend requests to external API (`https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api`)
3. **In-memory caching** - Implement simple in-memory cache for API responses (5-10 minute TTL)
4. **Error handling** - Handle external API failures gracefully

**Skills tested:** Project setup speed, proxy implementation, caching strategies, Node.js proficiency

### Phase 2: Frontend Development (45 minutes)

**Create a web interface with:**
1. **Project setup** - Bootstrap frontend (or use full-stack framework)
2. **Restaurant list** - Display restaurants in a clean, usable interface  
3. **Single filter type** - Choose either category filters (filter_ids) OR price range filtering  
4. **Filter data loading** - Fetch filter options through your proxy server
5. **Clean interface** - Focus on functionality over pixel-perfect styling

**Skills tested:** Frontend architecture, UI/UX decisions, proxy integration, filtering implementation

### Phase 3: Integration & Polish (30 minutes)

**Complete the application:**
1. **Connect frontend to proxy** - Wire up API calls with error handling  
2. **Loading states** - Show loading indicators during API calls
3. **Basic error handling** - Display user-friendly error messages
4. **Final testing** - Ensure core functionality works end-to-end

**Skills tested:** Integration skills, error handling, user experience, time management

## Provided Resources

**You'll receive:**

### Design Reference Only
- **Figma Design:** [Eidra Tech Case](https://www.figma.com/file/263XJno7ii0uEaarJP9Ydw/Eidra-Tech-Case?type=design&node-id=27%3A5682&mode=design&t=BPI3BgkmmHVtTdCb-1)
- Mobile and desktop layouts provided
- Use as visual reference - pixel-perfect matching not required
- Prioritize functionality over detailed styling

### External API Reference
- **Base URL:** `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api`
- **Documentation:** [API Docs](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/)
- **Your backend proxies this API** - Route frontend requests through your server to hide the external API
- **Cache responses in memory** to improve performance and handle API failures

**That's it!** Everything else you build from scratch.


## Evaluation Criteria

**Technical Execution (40%):**
- Project bootstrapping speed and decisions
- Proxy implementation and caching strategy
- Frontend architecture and component design
- In-memory cache implementation with TTL

**Problem-Solving & Time Management (30%):**
- Feature prioritization under time pressure
- Working solution delivery under constraints
- Problem-solving approach when facing challenges
- Code organization and structure decisions

**Fullstack Integration (30%):**
- Frontend-proxy communication
- Cache management and fallback strategies
- Overall user experience

**Discussion Topics for Follow-up:**
- Why did you choose your specific architecture (separate apps vs full-stack framework)?
- How did you implement the caching strategy?
- How would you approach testing this proxy application?
- What would you improve given more time?
- How would you handle scaling this proxy to handle high traffic?
- How would you structure the codebase for a team?
- What production concerns would you have with this proxy setup?

## Submission

**Required deliverables:**
- Complete application (proxy server + frontend interface)
- Brief README with setup instructions

**Submission options:**
- ZIP your complete project, or
- Share via GitHub repository (preferred)

Email the ZIP file, or the github link, to rafal.truszkowski@punchkick.com and conrad.mendelius@punchkick.com.

## Questions?

Don't hesitate to contact us if you have any questions! Please send an email to either:

- Rafal Truszkowski <rafal.truszkowski@punchkick.com>
- Conrad Mendelius <conrad.mendelius@punchkick.com>
