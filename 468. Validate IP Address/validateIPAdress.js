var validIPAddress = function(IP) {
  const arr1 = IP.split('.')
  const arr2 = IP.split(':')
  const resultValue = { v4: 'IPv4', v6: 'IPv6', error: 'Neither' }
  if (arr1.length === 4) {
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i]
      if (!v4Value(element)) {
        return resultValue.error
      }
    }
    return resultValue.v4
  } else if (arr2.length === 8) {
    for (let i = 0; i < arr2.length; i++) {
      const element = arr2[i]
      if (!v6Value(element)) {
        return resultValue.error
      }
    }
    return resultValue.v6
  } else {
    return resultValue.error
  }
}

function v4Value(str) {
  if (str.length === 0) {
    return false
  }
  const nums = '0123456789'
  for (let i = 0; i < str.length; i++) {
    const element = str[i]
    if (!nums.includes(element)) {
      return false
    }
  }
  if (str.length > 1 && str[0] === '0') {
    return false
  } else if (parseInt(str) > 255 || parseInt(str) < 0) {
    return false
  }

  return true
}

/**
 *
 * @param {string} str
 */
function v6Value(str) {
  if (str.length <= 0 || str.length > 4) {
    return false
  }
  const validValues = '0123456789abcdef'
  for (let i = str.length - 1; i > -1; i--) {
    if (!validValues.includes(str[i].toLowerCase())) {
      return false
    }
  }

  return true
}
