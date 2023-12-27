def factorial(n):
    """Calculate the factorial of a non-negative integer."""
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

def taylor_expansion_exponential(x, terms=10):
    """Approximate e^x using the Taylor Expansion."""
    result = 1.0  # Initialize with the first term (f(a) = 1)
    sign = -1  # Alternate the sign of each term
    for n in range(1, terms):
        term = (sign * (x ** n)) / factorial(n)
        result += term
        sign *= -1  # Alternate the sign for the next term
    return result

# Example usage
x_value = 2.0
approximation_terms = 9
result = taylor_expansion_exponential(x_value, approximation_terms)
print(f"Approximation of e^{x_value} using {approximation_terms} terms, answer = {result}")
