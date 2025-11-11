// Simple mock API layer to simulate network calls
export const delay = (ms = 500) => new Promise(res => setTimeout(res, ms))

export async function mockFetch(url, options = {}) {
  await delay(400)
  // route by url
  if (url.endsWith('/auth/login')) {
    return { ok: true, json: async () => ({ token: 'demo-token', user: { id: 'u1', name: 'Ava Learner', role: 'student', credits: 120 } }) }
  }
  if (url.endsWith('/auth/signup')) {
    return { ok: true, json: async () => ({ token: 'demo-token', user: { id: 'u2', name: 'Nova Builder', role: 'mentor', credits: 200 } }) }
  }
  if (url.endsWith('/dashboard')) {
    return { ok: true, json: async () => ({ profile: { name: 'Ava Learner', role: 'student', headline: 'Frontend + GenAI enthusiast' }, credits: 120, actions: ['Find a mentor', 'List a gig', 'Upload certificate'] }) }
  }
  if (url.endsWith('/skills')) {
    return { ok: true, json: async () => ({
      me: { name: 'Ava', skills: ['React', 'Tailwind', 'Prompt Engineering'], offer: 'Design system audits', need: 'Backend pairing' },
      matches: [
        { id: 'm1', name: 'Kai', skill: 'Python + ML', similarity: 0.86 },
        { id: 'm2', name: 'Rue', skill: 'Rust + Systems', similarity: 0.73 },
        { id: 'm3', name: 'Zoe', skill: 'UI Motion', similarity: 0.68 },
      ]
    }) }
  }
  if (url.endsWith('/projects')) {
    return { ok: true, json: async () => ({
      list: [
        { id: 'p1', title: 'AI Study Buddy', milestones: ['Spec', 'MVP', 'Beta'], status: 'active' },
        { id: 'p2', title: 'Portfolio Revamp', milestones: ['Audit', 'Design', 'Ship'], status: 'planning' },
      ]
    }) }
  }
  if (url.endsWith('/certificates')) {
    return { ok: true, json: async () => ({
      items: [
        { id: 'c1', name: 'Intro to GenAI', issuer: 'OpenLearn', status: 'verified' },
        { id: 'c2', name: 'Advanced React', issuer: 'CodeCamp', status: 'pending' },
      ]
    }) }
  }
  if (url.endsWith('/hiring')) {
    return { ok: true, json: async () => ({
      gigs: [
        { id: 'g1', title: 'React Mentor (5h)', payout: 250, escrow: 'funded' },
        { id: 'g2', title: 'ML Coach (3h)', payout: 180, escrow: 'awaiting' },
      ]
    }) }
  }
  if (url.endsWith('/messages')) {
    return { ok: true, json: async () => ({
      threads: [
        { id: 't1', name: 'Kai', last: 'Let\'s start Saturday?' },
        { id: 't2', name: 'Rue', last: 'Shared the repo' },
      ],
      messages: {
        t1: [
          { from: 'Kai', text: 'Hey! Ready to swap skills?' },
          { from: 'You', text: 'Absolutely, let\'s set a time.' }
        ]
      }
    }) }
  }
  if (url.endsWith('/availability')) {
    return { ok: true, json: async () => ({
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      slots: ['10:00', '11:30', '14:00', '16:00']
    }) }
  }
  if (url.endsWith('/admin')) {
    return { ok: true, json: async () => ({
      verificationQueue: [
        { id: 'v1', user: 'Ava', cert: 'Advanced React', status: 'pending' },
        { id: 'v2', user: 'Kai', cert: 'Data Ethics', status: 'pending' },
      ],
      disputes: [
        { id: 'd1', title: 'Missed session credit', status: 'open' }
      ],
      overview: { users: 1280, gigs: 340, verified: 812 }
    }) }
  }
  return { ok: false, json: async () => ({ error: 'Unknown route' }) }
}
