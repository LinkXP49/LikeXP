// Initialize Supabase
const SUPABASE_URL = 'https://your-project-ref.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Example: Check if a user is logged in
supabase.auth.onAuthStateChange((event, session) => {
    if(session?.user) {
        console.log('User is logged in:', session.user.email);
    } else {
        console.log('User is logged out');
    }
});