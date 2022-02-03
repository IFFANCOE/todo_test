const accessToken = localStorage.getItem('accessToken')

export default function({ store, redirect }) {
    // console.log('4444',accessToken);

    if (accessToken) {
        return redirect('/')
    }
}