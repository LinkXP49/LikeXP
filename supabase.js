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
<script>
(async () => {
  const { data: { user } } = await supabase.auth.getUser();
  const bar = document.getElementById('user-bar');

  if (!bar) return;

  if (user) {
    bar.innerHTML = `
      <span>👤 ${user.email}</span>
      <a href="createprofile.html">My Profile</a>
      <button id="logout">Logout</button>
    `;

    document.getElementById('logout').onclick = async () => {
      await supabase.auth.signOut();
      location.reload();
    };
  } else {
    bar.innerHTML = `<a href="login.html">Login</a>`;
  }
})();
</script>
