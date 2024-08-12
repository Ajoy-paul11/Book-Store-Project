import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password } = req.body

    if ([fullName, email, password].some(field => field?.trim() === "")) {
        throw new ApiError(400, "Fields can't be empty")
    }

    const getUser = await User.findOne({ email })

    if (getUser) {
        throw new ApiError(400, "User already exist with same Email")
    }

    const user = await User.create({
        fullName,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select("-password")

    if (!createdUser) {
        throw new ApiError(500, "Something occurred while registering the user")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, createdUser, "User registered successfully")
        )
})


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email?.trim() || !password?.trim()) {
        throw new ApiError(400, "Both fields are required to login")
    }

    const findUser = await User.findOne({ email })

    if (!findUser) {
        throw new ApiError(400, "User does not exist")
    }

    const checkPassword = await findUser.isPasswordCorrect(password)

    if (!checkPassword) {
        throw new ApiError(401, "Invalid User Credentials")
    }

    const loggedUser = await User.findById(findUser._id).select("-password")

    return res
        .status(200)
        .json(new ApiResponse(200, loggedUser, "User logged In user successfully"))
})


export { registerUser, loginUser }