// Initialize Supabase
const SUPABASE_URL = https://ekttgxbdhxedtpggurpj.supabase.co
const SUPABASE_ANON_KEY = sb_publishable_SHZvY63CAzzqrJHezW9-Lg_1TjFvHfZ
const supabase = supabase.https://ekttgxbdhxedtpggurpj.supabase.co, sb_publishable_SHZvY63CAzzqrJHezW9-Lg_1TjFvHfZ
// Example: Check if a user is logged in
supabase.auth.onAuthStateChange((event, session) => {
    if(session?.user) {
        console.log('User is logged in:', session.user.email);
    } else {
        console.log('User is logged out');
    }
});
