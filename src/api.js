import toast, { Toaster } from 'react-hot-toast';

 
 



export const login = async (email, password) => {
    const res = await fetch('https://api.importlio.com/api/jwt/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    return await res.json()
}

export const verify = async (access) => {
    const res = await fetch('https://api.importlio.com/api/jwt/verify/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ access })
    })

    // If the verification was successful, the response will contain a JWT token

    if (res.ok) {
        toast.success('Verification successful')
        return await res.json()
    }

    // If the verification was unsuccessful, the response will contain an error message
    toast.error('Verification failed')
}

export const refresh = async (refresh) => {
    const res = await fetch('https://api.importlio.com/api/jwt/refresh/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refresh })
    })

    // If the refresh was successful, the response will contain a JWT token

    if (res.ok) {
        toast.success('Refresh successful')
        return await res.json()
    }

    // If the refresh was unsuccessful, the response will contain an error message
    toast.error('Refresh failed')
}

export const logout = async () => {
    const res = await fetch('https://api.importlio.com/api/jwt/logout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    // If the logout was successful, the response will contain a JWT token

    if (res.ok) {
        toast.success('Logout successful')
        return await res.json()
    }

    // If the logout was unsuccessful, the response will contain an error message
    toast.error('Logout failed')
}

// get user data
export const getUser = async (access) => {
    const res = await fetch('https://api.importlio.com/api/users/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access}`
        },
    })

    // If the logout was successful, the response will contain a JWT token

    if (res.ok) {
        toast.success('User data fetched')
        return await res.json()
    }

    // If the logout was unsuccessful, the response will contain an error message
    toast.error('User data fetch failed')
}