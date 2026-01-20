// Initialize Supabase
const SUPABASE_URL = https://ekttgxbdhxedtpggurpj.supabase.co
const SUPABASE_ANON_KEY = sb_secret_a1ah9xBAVbiXls5hDBeMAw_TUsBCNhP
const supabase = supabase.createClient(https://ekttgxbdhxedtpggurpj.supabase.co, sb_secret_a1ah9xBAVbiXls5hDBeMAw_TUsBCNhP 
// Example: Check if a user is logged in
supabase.auth.onAuthStateChange((event, session) => {
    if(session?.user) {
        console.log('User is logged in:', session.user.email);
    } else {
        console.log('User is logged out');
    }
});
